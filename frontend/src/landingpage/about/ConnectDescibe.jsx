import React from "react";
import ConnectCard from "./ConnectCard";
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "../../index.css";
function ConnectDes(){
         return(
         <div className=" Coneectcss">

        <ConnectCard
         heading="E-Mail"
         logopng={<EmailIcon />}
       clickid="nishadguptad@gmail.com"
        type="email"
     />

       <ConnectCard
       heading="Phone"
       logopng={<PhoneInTalkIcon />}
       clickid="+918081257992"
        type="phone"
      />

      <ConnectCard
        heading="WhatsApp"
       logopng={<WhatsAppIcon />}
       clickid="918081257992"
        type="whatsapp"
        />

</div>
        )
}

export default ConnectDes;