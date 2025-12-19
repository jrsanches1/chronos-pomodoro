import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault(); //Nao segue o link

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });

    //document.documentElement.setAttribute('data-theme', theme);
  }
  useEffect(() => {
    console.log('Theme mudou', theme, Date.now());
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      console.log('Este componente sera atualizado');
    };
  }, [theme]); // Executa apenas quando o valor de theme mudar

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href='#'
        aria-labell='Ir para a Home'
        title='Ir para a home'
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-labell='Ver Historico'
        title='Ver Historico'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-labell='Configuracoes'
        title='Configuracoes'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        aria-labell='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
