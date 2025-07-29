import {Page, Locator} from '@playwright/test';

export class PaginaRegistro {
  readonly page: Page;
  readonly nombre: Locator;
  readonly apellido: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly botonRegistrarse: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nombre = page.getByRole('textbox', {name: 'Nombre'});
    this.apellido = page.locator('input[name="lastName"]');
    this.email = page.getByRole('textbox', {name: 'Correo electrónico'});
    this.password = page.getByRole('textbox', {name: 'Contraseña'});
    this.botonRegistrarse = page.getByTestId('boton-registrarse');
  }
}