import { Route, Routes } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import Settings from "./components/Settings";
import Home from "./pages/Home";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
    lng: 'uz',
    resources: {
      uz: { translation: require('./i18n/uz.json') },
      ru: { translation: require('./i18n/ru.json') },
    }
});

function App() {
  return (
    <>
    <I18nextProvider i18n={i18next}>
      <Settings />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollTop />
    </I18nextProvider>
    </>
  );
}

export default App;
