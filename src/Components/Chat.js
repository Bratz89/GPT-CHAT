import '../CSS/Chat.css'
import '../CSS/Loader.css'
import React, { useRef, useState } from 'react'
import { FiSend } from 'react-icons/fi'
import TextareaAutosize from 'react-textarea-autosize'
import ChatConfig from './ChatConfig'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

console.log('https://github.com/Bratz89/GPT-CHAT');
console.log(`%cUsing  GPT-3.5-TURBO`, 'color: #ff4400; font-size: larger; font-weight: bolder')

function Chat() {
  const [loading, setLoading] = useState(false);
  const chatConfig = ChatConfig()
  const [aiRules, setaiRules] = useState(chatConfig.rules[0].rule)
  const [message, setMessage] = useState('')
  const [apiResponse, setapiResponse] = useState([{ role: "system", content: `Open ended conversation with an AI assistant.` }])

  if (1 === 2) { console.log(message) } // offff...

  const listRules = chatConfig.rules.map((a, i) =>
    <option key={i} value={a.rule.content}>{a.title}</option>
  )

  const changeRules = (event) => {
    document.querySelector('#selector')
    setaiRules(event.target.value)
    setapiResponse([{ role: "system", content: `${event.target.value}` }])
    console.log('%cRulechange:', 'color: #e4d248; font-size: larger; font-weight: bolder')
    console.log(event.target.value)
  }

  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
    handleDebouncedChange(event.target.value);
  };
  function debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }
  const handleDebouncedChange = debounce((value) => {
    setMessage(value);
  }, 300);

  const handleSend = (event) => {
    if (inputValue) {
      composeRequest()
    }
  }
  const handleKeyDown = (event) => {
    if (inputValue) {
      if (event.keyCode === 13 && !event.shiftKey) {
        composeRequest()
        event.preventDefault()
        event.target.blur()
        document.getElementById("message").focus()
      }
    }
  }

  const composeRequest = () => {
    executeScroll()
    let mesarray = { role: "user", content: inputValue, }
    let messages = Array.isArray(apiResponse) ? apiResponse.concat(mesarray) : [mesarray];

    setapiResponse(messages)
    SendQuestion(messages)
    setMessage("")
    setInputValue("")
    console.log('%cUser input:', 'color: #71A9F7; font-size: larger; font-weight: bolder')
    console.log(inputValue)

  }
  function sanitizeInput(input) {
    return input.replace(/\\/g, '');
  }
  async function SendQuestion(question) {
    setLoading(true);
    let endpoint = chatConfig.endpoint 

    if (window.location.hostname === "localhost" || window.location.hostname === '127.0.0.1') {
      console.log('Using local endpoint')
      endpoint = 'http://localhost:3001/ai'
    }

    var reqHeader = new Headers()

    let sanitizedQuestion = question.map((msg) => {
      if (msg.role === 'user') {
        return { ...msg, content: sanitizeInput(msg.content) };
      }
      return msg;
    });
    reqHeader.append('Prompt', JSON.stringify(sanitizedQuestion))
    reqHeader.append("Content-Type", "application/json")
    reqHeader.append('Authorization', 'Bearer etc...')

    let requestOptions = {
      method: 'POST',
      headers: reqHeader,
      redirect: 'follow'
    }


    fetch(endpoint, requestOptions)
      .then(response => response.text())
      .then(result => JSON.parse(result))
      .then(result => {
        if (result.error) {
          console.log(`%cAI Response: (Error)`, `color: #f44c27; font-size: larger; font-weight: bolder`);
          console.log(result.error);
          if (result.error === 'invalid_api_key') {
            setapiResponse(sanitizedQuestion.concat({ role: "assistant", content: "Error: Invalid API Key. Please check your API Key and try again.\nCheck https://github.com/Bratz89/GPT-CHAT/blob/main/README.md for installation" }));
          } else {
            setapiResponse(sanitizedQuestion.concat({ role: "assistant", content: result.error }));
          }
          executeScroll();
        } else
          if (result.usage && result.usage.total_tokens) {
            console.log(`%cAI Response: (${result.usage.total_tokens} Tokens)`, `color: #f44c27; font-size: larger; font-weight: bolder`);
            console.log(result.choices[0].message.content);
            setapiResponse(sanitizedQuestion.concat({ role: result.choices[0].message.role, content: result.choices[0].message.content }));
            executeScroll();
          } else {
            console.log(`%cAI Response: (No Token Usage Information)`, `color: #f44c27; font-size: larger; font-weight: bolder`);
            console.log(result);
            setapiResponse(sanitizedQuestion.concat({ role: "assistant", content: result.error }));
            executeScroll();
          }
      })
      .catch(error => {
        console.log(error)
        console.log('Connection failed. Please check if backend is running.');
        setapiResponse(sanitizedQuestion.concat({ role: "assistant", content: "Error: Connection refused. Please check your network settings or try again later." }));
        executeScroll();

      })
      .finally(() => setLoading(false));
  }

  const myRef = useRef(null)
  const executeScroll = () => {
    setTimeout(() => {
      myRef.current.scrollIntoView()
    }, 200)
  }

  function ResetChat() {
    setapiResponse(aiRules)
    setMessage("")
    document.getElementById("message").focus()
    console.log('%c\n\n Resetting chat prompt \n\n', 'color: #e4d248; font-size: larger; font-weight: bolder')
  }

  return (
    <div className="TileMain">
      <div style={{ display: "flex", marginTop: 20, marginBottom: 10, alignContent: "space-around" }}>
        <select id="selector" className='changeRule' onChange={changeRules}>{listRules}</select>
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 20, height: "100%", overflow: "scroll", }}>
        <style>{`
        ::-webkit-scrollbar {
        display: none;
        }
        `}</style>
        {Array.isArray(apiResponse) && apiResponse.map((message, index) => {
          const parts = message.content.split("```");

          return (
            <div key={index} className={message.role} style={{ marginTop: 0 }}>
              <span
                style={{
                  display: "flex",
                  fontWeight: "bold",
                  color: message.role === "assistant" ? "#f44c27" : message.role === "system" ? "#f9c61d" : "#71A9F7",
                  marginRight: 5,
                  width: "100%",
                }}
              >
                {message.role === "assistant" && "Ai"}
                {message.role === "user" && "You"}
                {message.role === "system" && "Rule"}
              </span>
              {parts.map((part, i) => (
                i % 2 === 0 ? <pre style={{ display: "flex", fontFamily: "inherit", wordWrap: "break-word", whiteSpace: "pre-wrap", margin: "auto" }}>{part.trim()}</pre> :

                  <div key={i} style={{ display: "flex", flexDirection: "column", marginTop: 15, padding: 10 }}>
                    <div style={{ width: "100%" }}>
                      <SyntaxHighlighter language="auto" style={atomOneDark} showLineNumbers={true} startingLineNumber={1} >
                        {part}
                      </SyntaxHighlighter>
                    </div>
                  </div>
              ))}
            </div>
          )
        })}
        <div ref={myRef}>  </div>
        {loading && (
          <div className="assistant" style={{ display: "flex" }}>
            <div style={{ margin: "auto" }} className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
        )}
      </div>
      <label style={{ color: "gray", textAlign: "center", margin: 10, cursor: "pointer" }} onClick={ResetChat}>Reset chat</label>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <TextareaAutosize autoFocus
          type="text"
          id="message"
          name="message"
          value={inputValue}
          onChange={handleChange}
          className='InputFieldTile'
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
        <FiSend className='sendIcon' onClick={handleSend} />
      </div>
    </div >
  )
}
export default Chat