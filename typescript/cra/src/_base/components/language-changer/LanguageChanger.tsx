import { useLang, LANGUAGES } from "app/setup/i18n";

const LanguageChanger = () => {
  const { currentLanguage, changeLanguage } = useLang();
  return (
    <>
      <h3>Current language: {currentLanguage.label}</h3>
      <ul>
        {LANGUAGES.map((lang) => (
          <li key={lang.code}>
            <label>
              {lang.label}
              <input
                type="radio"
                name="language"
                value={lang.code}
                checked={lang.code === currentLanguage.code}
                onChange={() => changeLanguage(lang)}
              />
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export { LanguageChanger };
