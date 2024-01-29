import React from 'react';

const CheckDisease_NLP = () => {
  return (
    <div className="flex justify-center items-center h-[76vh] bg-cover px-32 bg-violet-50" >

      <section className="w-[100%] bg-opacity-25 rounded-xl">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-md-12">

              <div className='h-[50vh] pb-6'>

              </div>

              <form action="process_check.php" method="post">
                <div className="form-group space-y-4">

                  <label htmlFor="symptom1" className="text-black text-xl font-bold">Enter Your Symptoms</label>

                  <div className="input-group">
                    <input type="text" className="form-control border-2 border-gray-800 px-4 rounded-lg bg-transparent text-black w-full h-10" id="symptom" name="symptom" required placeholder='Enter your symptoms' p />
                    <div className="input-group-append"></div>
                  </div>

                  <div className="flex justify-center">
                    <button type="submit" className="btn btn-primary bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-black rounded-full w-[15%] py-2 text-white text-lg font-bold">
                      Check Disease
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default CheckDisease_NLP;
