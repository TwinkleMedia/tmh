import React from "react";
import Heading from "../../component/Heading/Heading";
// import grid from "./gridData.js";
import "./homeGrid.css";
import freeUse from "../../image/freeUse.jpg";
import ModalVideo from "react-modal-video";
import DialogModal from "./DialogModal.js";
import grid from "./gridData.js";

export default function HomeGrid() {
  const someStyle = {
    aspectRatio: "1:1",
    // backgroundColor: "aliceblue",
    // overflow: "hidden",
  };
  
  const [noOfSlide, setNoOfSlide] = React.useState(3);
  const [dialogStat, setDialogStat] = React.useState({
    stat: false,
    ditem: {},
  });
  const [gridData, setGridData] = React.useState(grid);
  const [filter, setFilter] = React.useState('all');
  const [filteredData, setFilteredData] = React.useState([]);

  dialogStat.stat
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const handleXyz = () => {
    document.body.style.overflow = "auto";
  };

  const loadMore = () => {
    setNoOfSlide(noOfSlide + 3);
  };

  const loadLess = () => {
    setNoOfSlide(noOfSlide - 3);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filterData = () => {
    if (filter === 'all') {
      return gridData.slice(0, noOfSlide);
    }
    return gridData.filter(item => item.category.includes(filter)).slice(0, noOfSlide);
  };

  React.useEffect(() => {
    setFilteredData(filterData());
  }, [filter, noOfSlide]);

  return (
    <>
      <div className="home-grid">
        <div className="py-4">
          <Heading headingLabel="Our Dedication" />
        </div>
        <div className="filter"></div>
        <div className="grid container text-center">
          <div className="row mb-5">
            <div className="btn-group btn-grp justify-content-around flex-wrap" role="group" aria-label="Basic example">
              <button type="button" className="btn m-2" value="all" onClick={handleFilter}>
                All
              </button>
              <button type="button" className="btn m-2" value="ai-posts" onClick={handleFilter}>
                Real Estate Industries
              </button>
              <button type="button" className="btn m-2" value="brochures" onClick={handleFilter}>
                Brochures
              </button>
              <button type="button" className="btn m-2" value="ip" onClick={handleFilter}>
                Interactive Posts
              </button>
              <button type="button" className="btn m-2" value="logos" onClick={handleFilter}>
                Logos
              </button>
              <button type="button" className="btn m-2" value="medical" onClick={handleFilter}>
                Medical
              </button>
              <button type="button" className="btn m-2" value="packaging" onClick={handleFilter}>
                Packaging
              </button>
            </div>
          </div>
          <div className="row justify-content-around">
            {filteredData.map((item, index) => (
              <div className="col-lg-3 col-md-5 col-sm-12 m-1 align-content-center" style={someStyle} key={index}>
                <div
                  className="boxImg align-content-center"
                  onClick={() => {
                    // setDialogStat({ stat: true, ditem: item });
                  }}
                >
                  <img src={item.url} />
                  <div className="info px-2">
                    <h4>{item.heading4}</h4>
                    <h2 className="m-0">{item.category}</h2>
                    <h6>{item.heading6}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex buttons justify-content-end">
            <div className="loadMore m-2">
              {filteredData.length < gridData.length ? (
                <button className="Btn" onClick={loadMore}>
                  <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
                    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
                  </svg>
                  <p className="text">See More</p>
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="loadLess m-2">
              {filteredData.length > 3 ? (
                <button className="Btn" onClick={loadLess}>
                  <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
                    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
                  </svg>
                  <p className="text">See Less</p>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      {dialogStat.stat ? (
        <DialogModal setDialogStat={setDialogStat} name="videoplayback" ditem={dialogStat.ditem} />
      ) : (
        ""
      )}
    </>
  );
}





/* My Code */



// import React from "react";
// import Heading from "../../component/Heading/Heading";
// // import grid from "./gridData.js";
// import "./homeGrid.css";
// import freeUse from "../../image/freeUse.jpg";
// import ModalVideo from "react-modal-video";
// import DialogModal from "./DialogModal.js";
// import grid from "./gridData.js";

// export default function HomeGrid() {
//   const someStyle = {
//     ascpectRatio: "1:1",
//     backgroundColor: "aliceblue",
//     overflow: "hidden",
//   };
//   const [noOfSlide, setNoOfSlide] = React.useState(3);
//   const [dialogStat, setDialogStat] = React.useState({
//     stat: false,
//     ditem: {},
//   });
//   const [gridData, setGridData] = React.useState(grid);

//   dialogStat.stat
//     ? (document.body.style.overflow = "hidden")
//     : (document.body.style.overflow = "auto");

    
//     const handleXyz = () => {
//     document.body.style.overflow = "auto";
//   };

//   const loadMore = () => {
//     setNoOfSlide(noOfSlide + 3);
//   };
  
//   const loadLess = () => {
//     setNoOfSlide(noOfSlide - 3);
//   };
  
//   //Handling filters  \/\/\/\/\/\/\/
  
//   const [filter, setFilter] = React.useState('all');
//   const [slice, setSlice] = React.useState([]);
//   const [arr, setArr] = React.useState([]);

//   function handleFilter(e) {
//     console.log(e.target.value);
    
//     setFilter(e.target.value);
//   }

//   React.useEffect(()=>{
//     if(filter=='all'){
//      setSlice(gridData.slice(0, noOfSlide));
//      return;
//     }

//     setArr([]);
//     console.log("I am under useEffect: "+filter);
//     gridData.map((item,index)=>{
//       console.log("I am under map: "+filter)
//       // var arr=[];
//       if(item.category.includes(filter)){
//         console.log("I am under if: "+filter+'\n'+arr)
//         setArr((prev)=>{
//           return [...prev,item];
//         });
//         console.log("I am under if: "+filter+'\n'+arr);
//       }
      
//       setSlice(arr.slice(0, noOfSlide));
//     });
//      return ;
    
//   },[filter]);



//   return (
//     <>
//       <div className="home-grid">
//         <div className="py-4">
//           <Heading headingLabel="Grid" />
//         </div>
//         <div className="filter"></div>
//         <div className="grid container text-center ">
//           <div className="row mb-5">
//             <div
//               className="btn-group btn-grp justify-content-around"
//               role="group"
//               aria-label="Basic example"
//             >
//               <button type="button" className="btn m-2" value="all" onClick={handleFilter}>
//                 All
//               </button>
//               <button type="button" className="btn m-2" value="graphics" onClick={handleFilter}>
//                 Graphics Design
//               </button>
//               <button type="button" className="btn m-2" value="website" onClick={handleFilter}>
//                 Website Design
//               </button>
//               <button type="button" className="btn m-2" value="productShoot" onClick={handleFilter}>
//                 Product Shoot
//               </button>
//               <button
//                 type="button"
//                 className="btn m-2"
//                 value="influencerMarketing"
//                 onClick={handleFilter}
//               >
//                 Influencer Marketing
//               </button>
//             </div>
//             {/* <div
//               className="btn-group btn-grp justify-content-around"
//               role="group"
//               aria-label="Basic example"
//             >
//               <button type="button" className=" m-2" value="all">
//                 All
//               </button>
//               <button type="button" className=" m-2" value="graphics">
//                 Graphics Design
//               </button>
//               <button type="button" className=" m-2" value="website">
//                 Website Design
//               </button>
//               <button type="button" className=" m-2" value="productShoot">
//                 Product Shoot
//               </button>
//               <button
//                 type="button"
//                 className=" m-2"
//                 value="influencerMarketing"
//               >
//                 Influencer Marketing
//               </button>
//             </div> */}
//           </div>
//           <div className="row justify-content-around">
//             {slice.map((item, index) => {
//               return (
//                 <>
//                   <div className="col-3 m-1" style={someStyle}>
//                     <div
//                       className="boxImg"
//                       onClick={() => {
//                         setDialogStat((prev) => {
//                           return { ...prev, stat: true, ditem: item };
//                         });
//                       }}
//                     >
//                       <img src={freeUse} />
//                       <div className="info px-2">
//                         {/* <h4>Heading 4</h4> */}
//                         <h4>{item.heading4}</h4>
//                         {/* <h2 className="m-0">Heading 2</h2> */}
//                         <h2 className="m-0">{item.category}</h2>
//                         {/* <h6>Heading 6</h6> */}
//                         <h6>{item.heading6}</h6>
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               );
//             })}
//           </div>
//           <div className="d-flex buttons justify-content-end">
//             <div className="loadMore m-2">
//               {slice.length < grid.length ? (
//                 <button className="Btn" onClick={loadMore}>
//                   <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
//                     <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
//                   </svg>
//                   <p className="text">See More</p>
//                 </button>
//               ) : (
//                 ""
//               )}
//             </div>
//             <div className="loadLess m-2">
//               {slice.length > 3 ? (
//                 <button className="Btn" onClick={loadLess}>
//                   <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
//                     <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
//                   </svg>
//                   <p className="text">See Less</p>
//                 </button>
//               ) : (
//                 ""
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       {dialogStat.stat ? (
//         <DialogModal
//           setDialogStat={setDialogStat}
//           name="videoplayback"
//           ditem={dialogStat.ditem}
//         />
//       ) : (
//         ""
//       )}
//     </>
//   );
// }
