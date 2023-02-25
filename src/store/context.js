import React from 'react'

const Cardcontext = React.createContext({
      items: [],
      totalamount: 0,
      addItem: (items) => { },
      removeItem: (id) => { },
      token: "",
      isLoggein: false,
      login: (token,email) => { },
      logout: () => { },
      total:0

})


export default Cardcontext

