import react from "react";


const PageShifter = react.createContext({
    pageno: 1,
    setpageno: () => {}
  });

  export default PageShifter;