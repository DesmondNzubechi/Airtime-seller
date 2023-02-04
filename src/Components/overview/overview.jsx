import React from 'react';
import { BsCloudDownloadFill }  from 'react-icons/bs';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { AiOutlineUsergroupAdd }  from 'react-icons/ai';
import { FcRating }  from 'react-icons/fc';




const overView = () => {
    return(
  <div className="bg-sky-500">
   <div>
    <div>
  <BsCloudDownloadFill />
    </div>
    <div>
 <RiCustomerService2Fill />
    </div>
    <div>
  <AiOutlineUsergroupAdd />
    </div>
    <div>
  <FcRating />
    </div>
   </div>
  </div>
    )
}


export default overView;