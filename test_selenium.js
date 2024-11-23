const { Builder, By } = require('selenium-webdriver');

(async function testGestionRH() {
  const driver = await new Builder().forBrowser('chrome').build();
  console.log("Test démarré");

  await driver.get('http://localhost:8082');

  // Pour ajouter un employé
  await driver.findElement(By.id('ajout-nom')).sendKeys('Nouveau Employé');
  await driver.findElement(By.id('ajout-poste')).sendKeys('Testeur');
  await driver.findElement(By.xpath("//button[text()='Ajouter']")).click();
  console.log("Employé ajouté");

  // Pour supprimer un employé
  await driver.findElement(By.id('supprimer-id')).sendKeys('1');
  await driver.findElement(By.xpath("//button[text()='Supprimer']")).click();
  console.log("Employé supprimé");

  await driver.quit();
  console.log("Test terminé");
})();