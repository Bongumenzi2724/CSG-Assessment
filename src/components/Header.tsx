import {motion} from 'framer-motion'


const Header = () => {

  return (
    <div className="flex justify-center items-center flex-col">
      {/**<h1 className="text-2xl font-bold text-[#442d63] underline line-clamp-1 w-full">CSG ASSESSMENT</h1>*/}
      <div className="flex justify-center items-center flex-col p-4 gap-5">
        <h1 className="text-xl font-bold text-[#442d63]"><strong>About Dr Arthur Frost</strong></h1>
        <motion.img 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:2}}
          src="https://fathersheart.co.za/wp-content/uploads/2020/05/CAP7154-2.jpg" 
          alt="Dr Arthur Frost" 
          className="rounded-lg object-contain max-h-lg max-w-lg"
          />
        <div className="flex justify-center items-center flex-col gap-2">
          <div>
            <p className="text-xl font-bold text-[#442d63] line-clamp-1 w-full">Here are some facts about Dr. Arthur Frost</p>
            <motion.ul 
              className="mb-0 pb-1 pl-1 ml-6"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:1, staggerChildren:0.5}}
            >
              <li className="text-base font-thin text-[#326084]">He has planted 3 Churches</li>
              <li className="text-base font-thin text-[#326084]">He is the Senior Pastor of Fathers Heart Digital Church</li>
              <li className="text-base font-thin text-[#326084]">He has run Colleges since 1992</li>
              <li className="text-base font-thin text-[#326084]">He has planted 3 Colleges</li>
              <li className="text-base font-thin text-[#326084]">He has developed Gap Year programmes since 2002</li>
              <li className="text-base font-thin text-[#326084]">He is the founder of Fathers Heart</li>
              <li className="text-base font-thin text-[#326084]">He is the president and founder of Generation Impact Academic Institute</li>
              <li className="text-base font-thin text-[#326084]">Dr Arthur Frost holds a PH.D. in education as well as a D.D.</li>
            </motion.ul>
          </div>
          <div className="flex justify-start items-start flex-col gap-4">
            <p className="text-base font-medium text-[#072238]">Dr. Frost has a deep desire to equip the body of Christ and activate every member to become a fully mature and functional Christian in God's army. </p>
            <p className="text-base font-medium text-[#326084]">This app is one of the avenues in which he does so by sharing all his teachings and sermons free of charge.<br/> Please use this app, share this app and enjoy the journey together as we draw near to Christ</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header