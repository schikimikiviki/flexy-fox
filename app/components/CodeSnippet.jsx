import React, { useEffect } from 'react'

const CodeSnippet = ({ data }) => {
  const copyButtonLabel = 'Copy Code'

  useEffect(() => {
    const addCopyButton = (block, button) => async () => {
      const code = block.querySelector('code')
      const text = code.innerText
      await navigator.clipboard.writeText(text)
      button.innerText = 'Code Copied'
    }

    const block = document.querySelector('pre')

    if (navigator.clipboard) {
      const button = document.createElement('button')
      button.innerText = copyButtonLabel
      block.appendChild(button)
      button.addEventListener('click', addCopyButton(block, button))
    }

    return () => {
      // Cleanup code if needed
    }
  }, [])

  return (
    <div>
      <pre>
        <code className="language-html">{data}</code>
      </pre>
    </div>
  )
}

export default CodeSnippet
