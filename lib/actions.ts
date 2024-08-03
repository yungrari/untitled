"use server"

async function getAddressData(address: string) {
  const response = await fetch(`https://api.etherscan.io/api?module=account&action=balance&address=0x1798C1E2ac82e5A15Cd6b9F664d9E4b139A8A140&tag=latest&apikey=91HYW9429K7U8UXIBACY799QK2TQ9RZJVQ`)

  if (!response.ok) {
    throw new Error(`HTTPError!#${response.status}:${response.statusText}`)
  }  

  const data = await response.json()

  return data
}

export async function submitAddress(_: any, formData: FormData) {
  const address = formData.get("address")?.toString() || ""
  
  const data = await getAddressData(address)

  return { message: data.result }
}
