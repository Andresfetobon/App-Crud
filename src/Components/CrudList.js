
const CrudList = ({ cruds, deleteCruds, newUser }) =>{



    return(
        <div className="Container-primary">
            {
              cruds.map(crud => (
                <div  key={crud.id}>
                  <div className="Container-Crud">
                    <div className="crud-box">
                  <p> <b>{crud.first_name} {crud.last_name}</b></p> 

                    </div>

                  <div className="crud-box">
                  <p>
                    <span>EMAIL</span> <br />
                    {crud.email}
                  </p>

                  <p>
                    <span>BIRTHDAY</span>
                     {crud.birthday}
                  </p>
                    </div>
                  
                    

                  <div className="button-container">
                  <button className=" " onClick={() => deleteCruds(crud.id)}><i className='bx bxs-trash-alt'></i></button>
                  <button onClick={() => newUser(crud)}><i className='bx bxs-edit-alt'></i></button>
                  </div>
                  </div>

                </div>
              ))
            }
        </div>
    )
}   

export default CrudList;