import burgerImage from "../../../assets/burger.png";

const Ingredients = () => {
  return (
    <div className=" bg-secondary py-20">
      <div className="container mx-auto">
        <div className="text-white">
          <div className="text-center">
            <p className="text-xl font-bold">INGREDIENTS</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Baked with Natural <br /> Ingredients
            </h2>
          </div>


          <div className="flex flex-col md:flex-row mx-4 md:mx-0 justify-center gap-10 items-center mt-10">
            <div className="text-center md:text-left">
              <div>
                <h4 className="text-xl font-bold">Fresh Buns</h4>
                <p className="font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div className="mt-7">
                <h4 className="text-xl font-bold">Lettuce Leaf</h4>
                <p className="font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div className="mt-7">
                <h4 className="text-xl font-bold">Organic Onions</h4>
                <p className="font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>

            <div>
              <img className="w-[600px]" src={burgerImage} alt="" />
            </div>

            <div className="text-center md:text-right">
              <div>
                <div>
                  <h4 className="text-xl font-bold">Glow Cheese</h4>
                  <p className="font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
                <div className="mt-7">
                  <h4 className="text-xl font-bold">Quality Meat</h4>
                  <p className="font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
                <div className="mt-7">
                  <h4 className="text-xl font-bold">Homemade Bacon</h4>
                  <p className="font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Ingredients;
