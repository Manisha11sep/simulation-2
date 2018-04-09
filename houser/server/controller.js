module.exports = {
 
    getAll: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read()
        .then( products => res.status(200).send( products ) )
        .catch( () => res.status(500).send() );
    },

    create: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { id,name,address,city,state,zip,img,mortgage,rent } = req.body;
    
        dbInstance.create_house([ id,name,address,city,state,zip,img,mortgage,rent ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
      },

      delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
    
        dbInstance.delete_house([ params.id ])
          .then( () => res.status(200).send() )
          .catch( () => res.status(500).send() );
      }
    };
    