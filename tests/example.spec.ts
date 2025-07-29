import { test, expect } from '@playwright/test';
import { PaginaRegistro } from '../pages/paginRegistro';

let paginaRegistro: PaginaRegistro;

test('TC1 - registro exitoso ', async ({ page }) => {
  paginaRegistro = new PaginaRegistro(page);
  const emailAleatorio = `cintia.${Math.floor(Math.random() * 10000)}@example.com`;

  await page.goto('http://localhost:3000/signup');
  await paginaRegistro.nombre.fill('Cintia');
  await paginaRegistro.apellido.fill('Bravo');
  await paginaRegistro.email.fill(emailAleatorio);
  await paginaRegistro.password.fill('12345678');
  await paginaRegistro.botonRegistrarse.click();
  await expect(page.getByText('Registro exitoso!')).toBeVisible();
 

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});

test('TC2 - registro no exitoso, mail existente ', async ({ page }) => {
   paginaRegistro = new PaginaRegistro(page);
 
  await page.goto('http://localhost:3000/signup');
  await paginaRegistro.nombre.fill('Cintia');
  await paginaRegistro.apellido.fill('Bravo');
  await paginaRegistro.email.fill('nair094@hotmail.com'); // Usar un email ya registrado
  await paginaRegistro.password.fill('12345678');
  await paginaRegistro.botonRegistrarse.click();
  await expect(page.getByText('Email already in use')).toBeVisible();
  await page.waitForTimeout(2000);

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});