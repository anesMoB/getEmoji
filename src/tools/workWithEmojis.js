  export const copyEmoji = (emoji,index=0) => {
    console.log(emoji)
    const emojiChar = String.fromCodePoint(parseInt(emoji.unicode[index].replace("U+", ""), 16))
    navigator.clipboard.writeText(emojiChar)
      .then(() => alert(`Copied ${emojiChar} to clipboard!`))
      .catch(err => console.error(err))
  }

  export  function decodeHtml(html) {
  const el = document.createElement("textarea")
  el.innerHTML = html
  return el.value
}

