import React from "react"
import Helmet from "react-helmet"

export default function Home() {
  console.log()
  return <> 
  <Helmet
      title='asdasd1213'
    >
      
    </Helmet>
  <div>
    <h2>SOME VENDOR'S PAGE</h2>
    <script>
        {`
        document.addEventListener('DOMContentLoaded', function (){
        let iframe = document.createElement('iframe');
        iframe.src = 'https://someservice.netlify.app/checker';
        iframe.setAttribute('style', 'display:none;');
        document.body.appendChild(iframe);
        })
        `}
      </script>
  </div>
  </>
}
