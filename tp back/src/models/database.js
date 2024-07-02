import { Sequelize } from "sequelize";
import MarcasModel from "./marcas.js";
import PantallasModel from "./pantallas.js";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './pantallas.db'
}) 
/*
// Definición de modelos
const Procesador = sequelize.define('Procesador', ProcesadorModel.ProcesadoresAttributes, ProcesadorModel.ProcesadoresOptions);
const Notebook = sequelize.define('Notebook', NotebookModel.NotebooksAttributes, NotebookModel.NotebooksOptions);

// Definición de asociaciones
Notebook.belongsTo(Procesador, { foreignKey: 'IdProcesador' });
Procesador.hasMany(Notebook, { foreignKey: 'IdProcesador' });
*/

sequelize.define(
    'Marcas',
    MarcasModel.MarcasAttributes,
    MarcasModel.MarcasOptions
)

sequelize.define(
    'Pantallas',
    PantallasModel.PantallasAttributes,
    PantallasModel.PantallasOptions
)

sequelize.models.Pantallas.belongsTo(sequelize.models.Marcas,{
    foreignKey: 'IdMarca'
})



async function initializeDatabase() {
    try {
        await sequelize.sync();
        console.log("Database synchronized successfully.");
    } catch (err) {
        console.error("Failed to synchronize database:", err.message);
    }
}

initializeDatabase()

export default sequelize