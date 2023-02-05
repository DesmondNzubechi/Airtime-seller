  import React from "react";
import { FAQ } from "./FAQ";
import { Whychoose } from "../WhyChooseUs/ChooseUs";

  export const FAQs = () => {

    return (
        <div className="px-[30px] pt-[100px] py-[50px]">
        <div className="my-[30px] ">
          <h2 className="font-semibold text-[20px] text-slate-500  md:text-[25px] ">What You Should Know</h2>
          <h1 className="text-[25px] font-bold md:text-[40px] "><span className="text-sky-500  "> Frequently Asked</span>  Question (FAQ)</h1>
          </div> 
          <div className="grid md:grid-cols-3 gap-[30px]">
         <FAQ 
             Que='What is AirtimeSeller?'
            Ans='AirtimeSeller Technology LTD is your number
            one Airtime to cash converter available in Nigeria. You can
             easily convert your excess airtime or overloaded Airtime back
              to cash with us.'
               
            />
             <FAQ 
             Que='What are your hours of operation?'
            Ans='We operate 24/7, we are always available to serve you better. 
            However in the event of server maintenance or any of such activities you might experience difficulty or inability to use our website or app.'
               
            />
             <FAQ 
             Que='Is this platform legitimate??'
            Ans='AirtimeSeller  Technology LTD is a registered Nigerian company with registered license number RC16754037. It is 100% legitimate.'
               
            />
             <FAQ 
             Que='Do you have an app and where can I get it?'
            Ans='Our mobile app is under production and will be found on the Google play store. It will also be available to
            iOS users on the app store or you can simply log on to www.airtimeSeller.com and we would be glad to render our service to you.'
               
            />
             <FAQ 
             Que='What networks do you convert?'
            Ans='We convert all networks with no exceptions. Glo, MTN, 9mobile and Airtel.
            However if at a certain time a certain network is unavailable on our platform it is due to a network down time and we advice that
             you check back within 24 to 48 hours.'
               
            />
             <FAQ 
             Que='Will the airtime be automatically deducted from my balance?'
            Ans='No it will not. Sending the airtime manually to the designated number shows your consent to the transaction about to take place and
            reduces fraudulent transactions.'
               
            />
             <FAQ 
             Que='What are the rates for converting airtime to cash? '
            Ans='AirtimeFlip does not have a fixed rate for airtime to cash conversion. Rates on all networks are subject 
            to change. However, we will always offer the cheapest rates in the market at any point in time.'
               
            />
             <FAQ 
             Que='Can we pay utility bills using AirtimeSeller?'
            Ans='Yes, you can pay for your cable TV, electricity bills and much more using AirtimeFlip or our website.'
               
            />
             <FAQ 
             Que='Can I perform multiple transactions? '
            Ans='Yes you can carry out multiple transactions. AirtimeFlip operates 24/7 and is always available 
            for all your needs all day, every day.'
               
            />
            </div>
            <Whychoose />
            </div>
    )
  }