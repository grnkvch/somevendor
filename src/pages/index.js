import React from "react"
import Helmet from "react-helmet"

export default function Home() {
  console.log()
  return <> 
  <Helmet
      title="SOME VENDOR'S PAGE"
    >
      <script async src="https://epam-club-dev.firebaseapp.com/vendorPlugin?key=00b23b62-0e45-4fea-ac0e-6f956ba8cf2f"></script>
    </Helmet>
  <div>
    <h2>SOME VENDOR'S PAGE</h2>
  </div>
  </>
}