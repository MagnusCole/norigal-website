const fs = require("fs");
const path = require("path");

const OUTPUT_FILE = "project_structure.txt"; // Archivo de salida
const MAX_LINES = 50; // Máximo de líneas a incluir por archivo

/**
 * Recorrer el directorio y obtener la estructura y contenido
 * @param {string} dirPath - Ruta del directorio a recorrer
 * @param {string} relativePath - Ruta relativa para mostrar
 * @param {Array} result - Resultado acumulado
 */
function readDirectory(dirPath, relativePath = "", result = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const relativeFilePath = path.join(relativePath, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      // Si es un directorio, añadirlo y recorrerlo
      result.push({ type: "directory", path: relativeFilePath });
      readDirectory(fullPath, relativeFilePath, result);
    } else if (stats.isFile()) {
      // Si es un archivo, leer el contenido
      const content = fs.readFileSync(fullPath, "utf-8").split("\n").slice(0, MAX_LINES).join("\n");
      result.push({ type: "file", path: relativeFilePath, content });
    }
  });

  return result;
}

/**
 * Guardar el resultado en un archivo
 * @param {Array} structure - Estructura del proyecto
 */
function saveToFile(structure) {
  const output = structure
    .map((item) => {
      if (item.type === "directory") {
        return `📂 ${item.path}/`;
      } else if (item.type === "file") {
        return `📄 ${item.path}\n---\n${item.content}\n---`;
      }
    })
    .join("\n\n");

  fs.writeFileSync(OUTPUT_FILE, output, "utf-8");
  console.log(`Estructura del proyecto guardada en: ${OUTPUT_FILE}`);
}

// Punto de entrada
const projectDir = path.resolve(__dirname); // Cambiar si necesitas recorrer otro directorio
const structure = readDirectory(projectDir);
saveToFile(structure);
