import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const users = [
  {
    nombre: "clara",
  },
  {
    nombre: "jose",
  }, 

  {nombre: 'juan',
 
}
];

export const loginPost = (req, res) => {
  const { nombre } = req.body;

  const index = users.findIndex((aUser) => aUser.nombre === nombre);

  if (index < 0) res.status(401).json({ msg: "no estas autorizado" });
  else {
    req.session.nombre = nombre;
    res.redirect("/home");
  }
};

export const loginGet = (req, res) => {
  const nombre = req.session?.nombre;
  if (nombre) {
    res.redirect("/home");
  } else {
    res.sendFile(path.join(__dirname, "../../views/login.html"));
  }
};
//agrego una ruta cualquiera

export const info = (req, res) => {
  const nombre = req.session?.nombre;
  if (!nombre) {
    res.sendFile(path.join(__dirname, "../../views/info.html"));
  }
};



export const logout = (req, res) => {
  const nombre = req.session?.nombre;
  if (nombre) {
    req.session.destroy((err) => {
      if (!err) {
        res.render(path.join(__dirname, "../../views/partials/logout.ejs"), {
          nombre,
        });
      } else {
        res.redirect("/");
      }
    });
  } else {
    res.redirect("/");
  }
};

export const infoSession = (req, res) => {
  res.render(path.join(__dirname, "../../views/partials/home.ejs"), {
    nombre: req.session.nombre,
    
  });
};
