import { readFile } from 'fs/promises'

// handling async errors using callbacks
{
  readFile(new URL('index.htm', import.meta.url), 'utf-8', (err, data) => {
    if (err) {
      // handle the error
      throw err
      // console.error(err)
    } else {
      //
    }
  })
}
// handling async errors with try catch
{
  try {
    const result = await readFile(new URL('index.htm', import.meta.url), 'utf-8')
  } catch (e) {
    console.error(e)
    console.log("didnt break")
  }
}
// for handling uncaught errors 'NOT RECOMMENDED BECAUSE IT WILL STILL CRASH THE APP'
{
  process.on('uncaughtException', (e) => {
    console.error(e)
  })

  const result = await readFile(new URL('index.htm', import.meta.url), 'utf-8')
  console.log('hello')
}