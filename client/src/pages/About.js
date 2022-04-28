import React from 'react';


const About = () => {

  return (

    <div className="mx-0 ">

      <h3 className="flex-row justify-center text-center">
        Meet the Team
      </h3>

      <br></br>

      {/* <div className="flex-row justify-center text-center "> */}

      <div className="flex-row justify-space-between justify-center text-center  ">



        {/* card one */}
        <div className="card col-5 m-3 p-0" >
          <h4 className="card-header bg-primary text-light p-2 m-0">Shaun Tehranchi
            <br />
            <span style={{ fontSize: '1rem' }}>
              Full-stack Developer
            </span>
          </h4 >
          <div className="card-body bg-light p-2">
            <img src="https://brighterwriting.com/wp-content/uploads/icon-user-default.png" class="card-img-top" alt="..."></img>
          </div>
          <div className="btn btn-primary btn-block btn-squared">
            <p>Github: https://github.com/ST12345678910</p>
            <p>LinkedIn: </p>
            <p>Contact: </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis delectus quibusdam nostrum laboriosam quaerat alias nihil! Quaerat labore illum, magni reiciendis placeat aliquam minima quam itaque ratione incidunt provident corporis!: </p>
          </div>
        </div>

        {/* card two */}
        <div className="card col-5 m-3 p-0">
          <h4 className="card-header bg-primary text-light p-2 m-0">Sharon Yoon
            <br />
            <span style={{ fontSize: '1rem' }}>
              Full-stack Developer
            </span>
          </h4>
          <div className="card-body bg-light p-2">
            <img src="https://brighterwriting.com/wp-content/uploads/icon-user-default.png" class="card-img-top" alt="..."></img>
          </div>
          <div className="btn btn-primary btn-block btn-squared">
            <p>Github: https://github.com/sharonjyoon</p>
            <p>LinkedIn: </p>
            <p>Contact: </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis delectus quibusdam nostrum laboriosam quaerat alias nihil! Quaerat labore illum, magni reiciendis placeat aliquam minima quam itaque ratione incidunt provident corporis!: </p>
          </div>
        </div>


        {/* card three */}
        <div className="card col-5 m-3 p-0">
          <h4 className="card-header bg-primary text-light p-2 m-0">Sean Cruz
            <br />
            <span style={{ fontSize: '1rem' }}>
              Full-stack Developer
            </span>
          </h4>
          <div className="card-body bg-light p-2">
            <img src="https://brighterwriting.com/wp-content/uploads/icon-user-default.png" class="card-img-top" alt="..."></img>
          </div>
          <div className="btn btn-primary btn-block btn-squared">
            <p>Github: https://github.com/skcruzer</p>
            <p>LinkedIn: </p>
            <p>Contact: </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis delectus quibusdam nostrum laboriosam quaerat alias nihil! Quaerat labore illum, magni reiciendis placeat aliquam minima quam itaque ratione incidunt provident corporis!: </p>
          </div>
        </div>

        {/* card four */}
        <div className="card col-5 m-3 p-0">
          <h4 className="card-header bg-primary text-light p-2 m-0">Hye Won Park
            <br />
            <span style={{ fontSize: '1rem' }}>
              Full-stack Developer
            </span>
          </h4>
          <div className="card-body bg-light p-2">
            <img src="https://brighterwriting.com/wp-content/uploads/icon-user-default.png" class="card-img-top" alt="..." ></img>
          </div>
          <div className="btn btn-primary btn-block btn-squared">
            <p>Github: https://github.com/hyep2</p>
            <p>LinkedIn: www.linkedin.com/in/hyewonpark96  </p>
            <p>Contact: hyewonpark26@gmail.com</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis delectus quibusdam nostrum laboriosam quaerat alias nihil! Quaerat labore illum, magni reiciendis placeat aliquam minima quam itaque ratione incidunt provident corporis!: </p>
            
          </div>
        </div>


      </div>

    </div>

    // </div>

  );
};

export default About;
