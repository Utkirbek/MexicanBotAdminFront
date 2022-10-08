import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";


import InputArea from "../form/InputArea";
import LabelArea from "../form/LabelArea";
import { Button} from "@windmill/react-ui";
import { SidebarContext } from "../../context/SidebarContext";


import useChatSubmit from "../../hooks/useChatSubmit";

const ChatDrawer = ({ id, messages,user }) => {

  

    const { toggleDrawer } = useContext(SidebarContext);



    

 
  const {
    register,
    handleSubmit,
    onSubmit,
    


  } = useChatSubmit(id);


  return (
    <>
      <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        
      <div>
        <h4 className="text-xl font-medium"> Chat with {user.first_name}</h4>
      </div>
     
        
      </div>
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200" >
      <div className="flex flex-col flex-grow w-full  ">
        
      {messages?.map((message, i) => (
        
        <div key={i+1} className="flex w-full mt-2 space-x-3 max-w-2xl  pl-4 pr-4">
           {message.sender === "user"  &&
        <><div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">{message.message}</p>
              </div>
            </div></>
      }


{message.sender === "admin"  &&
        <div className="flex w-full mt-2 space-x-3 max-w-x ml-auto justify-end">
				<div>
					<div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
						<p className="text-sm">{message.message}</p>
					</div>

				</div>
			</div>
      }
				




        </div>
	
      ))}
      </div>
			
      </Scrollbars>
      
      <Scrollbars className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-6 flex-grow scrollbar-hide w-full max-h-full pb-40">


            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Your Message" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  register={register}
                  label="Your Message"
                  name="message"
                  type="text"
                  placeholder="Your Message"
                />
                
              </div>
            </div>
          </div>

      <div className="fixed bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
          <Button
            onClick={toggleDrawer}
            className="h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700"
            layout="outline"
          >
            Cancel
          </Button>
        </div>
        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
          <Button type="submit" className="w-full h-12">
            Send Message
          </Button>
        </div>
      </div>
        </form>
      </Scrollbars>
    </>
  );
};

export default ChatDrawer;
