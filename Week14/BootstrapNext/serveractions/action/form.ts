"use server"
import fs from 'fs/promises'
export async function submitAction(formData:FormData) {
    
    //key passed in get is the from the name attribute not id 
    const name = formData.get("name");
    const address = formData.get("add")
    console.log(name,address)
    await fs.writeFile("file.txt",`Name is ${name} and address is ${address}`)
  }