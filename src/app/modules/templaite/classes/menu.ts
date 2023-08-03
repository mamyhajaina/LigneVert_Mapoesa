import { MenuItem } from "./menuItem";

export class Menu {
  static menuUtilisateur: MenuItem[] = [
    {
      title: 'Statistique',
      url: '/utilisateur/statistique',
      icon: 'bi bi-bar-chart',
    },
    {
      title: 'Enregistrement Appel',
      url: '/utilisateur/EnregistrementAppel',
      icon: 'bi bi-journal-text',
    },
    {
      title: 'List Appel',
      url: '/utilisateur/listeAppel',
      icon: 'bi bi-layout-text-window-reverse',
    },
    {
      title: 'Nouveau Projet',
      url: '/utilisateur/NouveauProjet',
      icon: 'bi bi-clipboard-plus',
    },
    // {
    //   title: 'List Projet',
    //   url: '/utilisateur/listeProjet',
    //   icon: 'bi bi-layout-text-window-reverse',
    // },
  ];

  static menuManager: MenuItem[] = [
    {
      title: 'Liste Repportage',
      url: '/manager/ListRepportage',
      icon: 'bi bi-layout-text-window-reverse',
    },
    {
      title: 'Notification',
      url: '/manager/notification',
      icon: 'bi bi-bell',
    },
    {
      title: 'Statistique',
      url: '/manager/statistique',
      icon: 'bi bi-bar-chart',
    }
  ];
}
