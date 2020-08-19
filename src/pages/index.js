import React from "react"
import Helmet from "react-helmet"

export default function Home() {
  console.log()
  return <> 
  <Helmet
      title="SOME VENDOR'S PAGE"
    >
      <script>
        {`
        (function(){
          function addIframe(){
            let iframe = document.createElement('iframe');
            iframe.src = 'https://someservice.netlify.app/checker';
            iframe.setAttribute('style', 'display:none;');
            document.body.appendChild(iframe);
          }
          if(document.body){
            addIframe()
          } else {
            document.addEventListener('DOMContentLoaded', addIframe)
          }
        })()
        `}
      </script>
    </Helmet>
  <div>
    <h2>SOME VENDOR'S PAGE</h2>
  </div>
  </>
}
