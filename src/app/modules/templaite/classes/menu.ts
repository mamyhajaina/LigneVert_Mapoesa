import { MenuItem } from "./menuItem";

export class Menu {
    static menuUtilisateur: MenuItem[] = [
        {
          title: 'Statistique',
          url: '/utilisateur/statistique',
          icon: 'clipboard',
        }
      ];

    static menuManager: MenuItem[] = [
    {
        title: 'Statistique',
        url: '/utilisateur/statistique',
        icon: 'clipboard',
    },
    {
      title: 'Liste',
      url: '/utilisateur/statistique',
      icon: 'clipboard',
    }
    ];
}
