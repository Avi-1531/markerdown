import { useState } from "react";
import "./App.css";
import { marked } from "marked";

function App() {
  const defaulttext = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
[title](https://www.example.com)
\`code\`

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
- First item
- Second item
- Third item
>Blockquote
![alt text](image.jpg)
	**bold text**
`;
  const [text, settext] = useState(defaulttext);

  marked.setOptions({
    breaks: true,
  });
  return (
    <>
      <textarea
        id="editor"
        onChange={(e) => {
          settext(e.target.value);
        }}
        value={text}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </>
  );
}

export default App;
