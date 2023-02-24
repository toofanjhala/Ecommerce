import React from 'react'

const Cardcontext = React.createContext({
      items: [],
      totalamount: 0,
      addItem: (items) => { },
      removeItem: (id) => { },
      token: "",
      isLoggein: false,
      login: (token) => { },
      logout: () => { }

})


export default Cardcontext

