import ReactAudioPlayer from 'react-audio-player'

/* interface ItemsProps{
  items:any[],
  items.Image:any
} */
  let mainURL="https://arthurfrost.qflo.co.za/";

const InformationCard = ({items}:any) => {
  
  const imageStr='Images/CommunionThumb.jpg'
  mainURL=mainURL.replace(/^"|"$/g,'');
  //let imageURL=item.Image.replace(/^"|"$/g,'');
  let imageURL=items.Image!=null?items.Image.replace(/^"|"$/g,''):imageStr.replace(/^"|"$/g,'');
  imageURL=`${mainURL}/${imageURL}`;

  //let audioURL=item.Audio.replace(/^"|"$/g,'');
  
  const audioStr='MP3/XmPqugb4EqQ.mp3'
  let audioURL=items.Audio!=null?items.Audio.replace(/^"|"$/g,''):audioStr.replace(/^"|"$/g,'');
  audioURL=`${mainURL}/${audioURL}`;

  return (
    <div className="max-w-sm rounded relative w-full">
      <div className="relative w-full h-[37vh]">
        <img src={imageURL} alt='image' className='w-full h-full rounded-xl'/>
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-start flex-col gap-2">
          <h2 className="text-xl font-bold text-[#442d63] line-clamp-1 w-full">
            Title: {items.Title}
          </h2>
          <div className="py-1 px-2 bg-slate-300 rounded-xl">
            <ReactAudioPlayer controls src={audioURL} className='flex justify-center items-center p-1'/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-2">
          <h3 className='text-base font-bold text-[#163d69]'>Category: {items.Category}</h3>
          <p className="text-base text-[#163d69] font-bold">
            Create Date : {items.CreateDate}
          </p>
        </div>
        <div className="flex flex-row gap-10 items-center">
          <p className="text-base font-bold text-[#326084]">Episode: {items.Episode}</p>
          <p className="text-base font-bold text-[#326084]">MediaName: {items.MediaName}</p>
        </div>
      </div>
    </div>
  )
}

export default InformationCard