import Image from "next/image";
import { Button } from "@/components/ui/button"
export default function Home() {
  return (
    <div className=" flex-col h-[6197px] w-full">
      <div className="  relative h-[716px] w-full ">
      <Image
      src="/images/shop.jpg"
      alt="Responsive image"
      layout="responsive"
      width={1440} // Aspect ratio width
      height={716} // Aspect ratio height
      className="object-cover"
    />
    <div className="absolute top-1/2 left-1/2 transform 
    -translate-x-1/2 -translate-y-1/2  h-[427px] w-[1044px] text-white
     flex-col items-start ">
     
    <div className=" items-start h-[24px ] w-[122px]"><h5 className=" items-start font-bold">SUMMER 2020</h5></div>
    <div className=" items-start h-[80px] w-[548px] mt-10 text-[56px]"><h1 className=" font-bold">NEW COLLECTION</h1></div>
    <div className=" items-start h-[60px] w-[375px] mt-8 text-[20px]"><h4 className=" font-bold"></h4>We know how large objects will act, 
    but things on a small scale.</div>
    <Button className=" bg-green-500 outline mt-8">SHOP NOW</Button>

     </div>

      
  </div>
  <div className="relative w-full h-[770px] mt-[58px] px-[80px] gap-[48px] opacity-100 text-black">
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1050px] h-[770px] flex flex-col items-center justify-start ">
    <div className=" relative w-[607px] h-[62px] mx-auto">
      <div className=" absolute w-[181px] h-[32px] mt-[80px] left-[220px]  font-bold">
        <h3 className="text-[24px] font-bold">EDITOR’S PICK</h3>
      </div>
      <div className=" absolute left-[220px] mt-[10px] w-[347px] h-[20px]">
        <p className=" text-[14px] mt-[120px] text-[#737373]"
>Problems trying to resolve the conflict between...</p>
      </div>
  </div>
  <div className="flex gap-[30px]  w-[1050px] mt-[220px] h-[500px] ">
  <div className="  w-[510px] h-[500px] ">
  <Image
      src="/images/men.png"
      alt="Responsive image"
      layout="responsive"
      width={510} // Aspect ratio width
      height={500} // Aspect ratio height
      className="object-cover"
    />
  </div>
  <div className="  w-[240px] h-[500px] ">
  <Image
      src="/images/women.png"
      alt="Responsive image"
      layout="responsive"
      width={510} // Aspect ratio width
      height={500} // Aspect ratio height
      className="object-cover"
    />
  </div>
  <div className=" relative flex-col w-[240px] h-[500px]">
  <div className="absolute   w-[240px] h-[242px] ">
  <Image
      src="/images/girl.png"
      alt="Responsive imageee"
      layout="responsive"
      width={240} // Aspect ratio width
      height={242} // Aspect ratio height
      className="object-cover"
    />
  </div>
  <div className="  w-[240px] h-[242px] mt-[250px]">
  <Image
      src="/images/boy.png"
      alt="Responsive image"
      layout="responsive"
      width={240} // Aspect ratio width
      height={250} // Aspect ratio height
      className="object-cover"
    />
  </div>

  </div>


  </div>
  </div>
  

</div>


<div className="flex-col items-center mx-auto w-full h-[1652px] ">
<div className=" flex-col w-[1124px] h-[1652px] ml-[195px] pt-[80px] pb-[80px] gap-[80px] ">




  <div className="flex-cols w-[691px] h-[102px] mt-[60px] mx-auto ">
  <div className="w-[191px] h-[30px] text-[20px] mx-auto ">Featured Products</div>
  <div className="w-[299px] h-[32px] text-[22px] font-bold mx-auto ">BESTSELLER PRODUCTS</div>
  <div className="w-[347px] h-[20px]  text-[14px]  mx-auto ">Problems trying to resolve the conflict between </div>



  </div>

  <div className=" relative  flex mx-auto w-[1049px] h-[615px] mt-[60px] gap-[30px] ">

  <div className="w-[238px] h-[615px]  mx-auto  flex flex-col">
  <div className="h-[427px] w-[238px]">
  <Image
      src="/images/p1.png"
      alt="Responsive imageee"
      layout="responsive"
      width={238} 
      height={427} 
      className="object-cover"
    />
  </div>
  <div className="flex flex-col space-y-4 mx-auto h-[188px] w-full">
  <div className="w-[131px] h-[24px] text-[16px] mt-[10px] mx-auto">
  <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center ">

</h5>Graphic Design</div>

  <div className="font-montserrat text-[#737373] text-center w-[146px] h-[24px] text-[14px] font-bold mx-auto ">
    English Department</div>

  <div className="flex w-[191px] h-[30px] text-[20px] mx-auto items-center justify-between">
    <div className="text-[16px] text-[#BDBDBD] line-through">$16.48</div>

    <div className="text-[16px]  text-[#23856D]">$6.48</div>
  </div>
  <div className=" flex w-[82px] mx-auto h-[16px] gap-[6px]">
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>


  


</div>
  </div>




</div>
  <div className="w-[241px] h-[615px]  mx-auto ">

    
  <div className="h-[427px] w-[241px]  ">
  <Image
      src="/images/p2.png"
      alt="Responsive imageee"
      layout="responsive"
      width={241} 
      height={427} 
      className="object-cover"
    />
  </div>

<div className="flex flex-col space-y-4 mx-auto h-[188px] w-full">
<div className="w-[131px] h-[24px] text-[16px] mt-[10px] mx-auto">
  <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center ">

</h5>Graphic Design</div>

  <div className="font-montserrat text-[#737373] text-center w-[146px] h-[24px] text-[14px] font-bold mx-auto ">
    English Department</div>

  <div className="flex w-[191px] h-[30px] text-[20px] mx-auto items-center justify-between">
    <div className="text-[16px] text-[#BDBDBD] line-through">$16.48</div>

    <div className="text-[16px]  text-[#23856D]">$6.48</div>
  </div>
  <div className=" flex w-[82px] mx-auto h-[16px] gap-[6px]">
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>


  


</div>
  </div>




</div>





  <div className="w-[240px] h-[615px] mx-auto ">
  <div className="h-[427px] w-[240px] ">
  <Image
      src="/images/p3.png"
      alt="Responsive imageee"
      layout="responsive"
      width={240}
      height={427} 
      className="object-cover"
    />
  </div>

<div className="flex flex-col space-y-4 h-[188px] w-full">
<div className="w-[131px] h-[24px] text-[16px] mt-[10px] mx-auto">
  <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center ">

</h5>Graphic Design</div>

  <div className="font-montserrat text-[#737373] text-center w-[146px] h-[24px] text-[14px] font-bold mx-auto ">
    English Department</div>

  <div className="flex w-[191px] h-[30px] text-[20px] mx-auto items-center justify-between">
    <div className="text-[16px] text-[#BDBDBD] line-through">$16.48</div>

    <div className="text-[16px]  text-[#23856D]">$6.48</div>
  </div>
  <div className=" flex w-[82px] mx-auto h-[16px] gap-[6px]">
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>


  


</div>
  </div>




</div>


  <div className="w-[240px] h-[615px] mx-auto ">
  <div className="h-[427px] w-[240px] ">
  <Image
      src="/images/p4.png"
      alt="Responsive imageee"
      layout="responsive"
      width={240} 
      height={427} 
      className="object-cover"
    /></div>
  

<div className="flex flex-col space-y-4 h-[188px] w-full">
<div className="w-[131px] h-[24px] text-[16px] mt-[10px] mx-auto">
  <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center ">

</h5>Graphic Design</div>

  <div className="font-montserrat text-[#737373] text-center w-[146px] h-[24px] text-[14px] font-bold mx-auto ">
    English Department</div>

  <div className="flex w-[191px] h-[30px] text-[20px] mx-auto items-center justify-between">
    <div className="text-[16px] text-[#BDBDBD] line-through">$16.48</div>

    <div className="text-[16px]  text-[#23856D]">$6.48</div>
  </div>
  <div className=" flex w-[82px] mx-auto h-[16px] gap-[6px]">
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>


  


</div>
  </div>




</div> 

</div>
 
  <div className=" relative flex mx-auto w-[1049px] h-[615px] gap-[30px] mt-[60px] ">
  <div className="w-[238px] h-[615px]  mx-auto flex flex-col">
  <div className="h-[427px] w-[238px] border-b">
  <Image
      src="/images/p5.png"
      alt="Responsive imageee"
      layout="responsive"
      width={238} 
      height={427} 
      className="object-cover"
    />
  </div>

<div className="flex flex-col space-y-4 h-[188px] w-full">
<div className="w-[131px] h-[24px] text-[16px] mt-[10px] mx-auto">
  <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center ">

</h5>Graphic Design</div>

  <div className="font-montserrat text-[#737373] text-center w-[146px] h-[24px] text-[14px] font-bold mx-auto ">
    English Department</div>

  <div className="flex w-[191px] h-[30px] text-[20px] mx-auto items-center justify-between">
    <div className="text-[16px] text-[#BDBDBD] line-through">$16.48</div>

    <div className="text-[16px]  text-[#23856D]">$6.48</div>
  </div>
  <div className=" flex w-[82px] mx-auto h-[16px] gap-[6px]">
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>


  


</div>
  </div>




</div>
  
  <div className="w-[241px] h-[615px]  mx-auto  ">
  <div className="h-[427px] w-[241px]   ">
  <Image
      src="/images/p6.png"
      alt="Responsive imageee"
      layout="responsive"
      width={241} 
      height={427} 
      className="object-cover"
    />
  </div>

<div className="h-[188px] w-full">
<div className="w-[131px] h-[24px] text-[16px] mt-[10px] mx-auto">
  <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center ">

</h5>Graphic Design</div>

  <div className="font-montserrat text-[#737373] text-center w-[146px] h-[24px] text-[14px] font-bold mx-auto ">
    English Department</div>

  <div className="flex w-[191px] h-[30px] text-[20px] mx-auto items-center justify-between">
    <div className="text-[16px] text-[#BDBDBD] line-through">$16.48</div>

    <div className="text-[16px]  text-[#23856D]">$6.48</div>
  </div>
  <div className=" flex w-[82px] mx-auto h-[16px] gap-[6px]">
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>


  


</div>
  </div>




</div>


  <div className="w-[240px] h-[615px] mx-auto  ">
  <div className="h-[427px] w-[240px]   ">
  <Image
      src="/images/p7.png"
      alt="Responsive imageee"
      layout="responsive"
      width={240}
      height={427} 
      className="object-cover"
    />
  </div>

<div className="h-[188px] w-full">
<div className="w-[131px] h-[24px] text-[16px] mt-[10px] mx-auto">
  <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center ">

</h5>Graphic Design</div>

  <div className="font-montserrat text-[#737373] text-center w-[146px] h-[24px] text-[14px] font-bold mx-auto ">
    English Department</div>

  <div className="flex w-[191px] h-[30px] text-[20px] mx-auto items-center justify-between">
    <div className="text-[16px] text-[#BDBDBD] line-through">$16.48</div>

    <div className="text-[16px]  text-[#23856D]">$6.48</div>
  </div>
  <div className=" flex w-[82px] mx-auto h-[16px] gap-[6px]">
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>


  


</div>
  </div>




</div>


  <div className="w-[240px] h-[615px] mx-auto  r">
  <div className="h-[427px] w-[240px]  ">
  <Image
      src="/images/p8.png"
      alt="Responsive imageee"
      layout="responsive"
      width={240} 
      height={427} 
      className="object-cover"
    /></div>
  

<div className="h-[188px] w-full">
<div className="w-[131px] h-[24px] text-[16px] mt-[10px] mx-auto">
  <h5 className="font-montserrat text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center ">

</h5>Graphic Design</div>

  <div className="font-montserrat text-[#737373] text-center w-[146px] h-[24px] text-[14px] font-bold mx-auto ">
    English Department</div>

  <div className="flex w-[191px] h-[30px] text-[20px] mx-auto items-center justify-between">
    <div className="text-[16px] text-[#BDBDBD] line-through">$16.48</div>

    <div className="text-[16px]  text-[#23856D]">$6.48</div>
  </div>
  <div className=" flex w-[82px] mx-auto h-[16px] gap-[6px]">
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
  <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>


  

</div>
</div>
  </div>






</div>

</div>




  </div>
  

  <div className="  w-full h-[711px] mx-auto  bg-[#23856D]">
  <div className="relative flex items-start justify-between  w-[1049px] h-[599px] mx-auto mt-[0px]  ">
  <div className="absolute w-[509px] h-[432px] mx-auto mt-[130px]  gap-[30px]">
  <div className="absolute top-1/2 left-1/2 transform 
    -translate-x-1/2 -translate-y-1/2  h-[432px] w-[509px] text-white
     flex-col items-start ">
     
    <div className=" items-start h-[24px ] w-[122px]"><h5 className=" items-start font-bold">SUMMER 2020</h5></div>
    <div className=" items-start h-[160px] w-[509px] mt-10 text-[56px]"><h1 className=" font-bold font-
Montserrat">Vita Classic Product</h1></div>
    <div className=" items-start h-[60px] w-[375px] mt-8 text-[20px]"><h4 className=" font-bold"></h4>We know how large objects will act, 
    but things on a small scale.</div><div className=" flex h-[32px] w-[77px]">
      <div className=" h-[32px] w-[77px] mx-auto mt-8 text-[24px]">$16.48</div>
    <Button className=" mx-auto bg-green-500 ml-[10px] text-[14px] outline mt-8">ADD TO CART</Button></div>

     </div>
  </div>
  <div className=" w-[510px] h-[685px] left-[270px] relative mt-[30px] mx-auto   ">
  <Image
      src="/images/shop.png"
      alt="Responsive imageee"
      layout="responsive"
      width={443} 
      height={685} 
      className="object-cover"
    />
  </div>
  
  </div>
    
  </div>
  <div className="flex w-full h-[682px] relative gap-[30px]  ">
  <div className=" w-[740px] ml-[30px] h-[682px]  ">
  <Image
      src="/images/asian.png"
      alt="Responsive imageee"
      layout="responsive"
      width={740} 
      height={682} 
      className="object-cover"
    />
  </div>
  <div className="  w-[573px] h-[326px] mt-[170px]     ">
  <div className="absolute w-[509px] h-[432px] mx-auto mt-[0px] items-start gap-[30px]">
  <div className="absolute top-1/2 left-1/2 transform 
    -translate-x-1/2 -translate-y-1/2  h-[432px] w-[509px] text-black
     flex-col items-start ">
     
    <div className=" items-start h-[24px ] text-black w-[122px]"><h5 className=" items-start font-
Montserrat font-bold">SUMMER 2020</h5></div>
    <div className=" items-start h-[100px] w-[375px] mt-10 text-[40px]"><h2 className=" font-bold font-
Montserrat">Part of the Neural 
Universe</h2></div>
    <div className=" items-start h-[60px] w-[375px] mt-8 text-black text-[20px]"><h4 className=" font-bold"></h4>We know how large objects will act, 
    but things on a small scale.</div><div className=" flex mt-[-20px] h-[52px] w-[339px]">
    <Button className=" mx-auto  h-[52px] w-[156px] bg-green-500 ml-[10px] text-[14px] outline mt-8">BUY NOW</Button>
    <Button className=" mx-auto  h-[52px] w-[173px] bg-white text-green-500 ml-[10px] text-[14px] outline mt-8">BUY NOW</Button>
</div>
     </div>
  </div>
  </div>

  </div>




  <div className="  w-full h-[1044px] mt-[170px] space-y-evenly    ">
  <div className="w-[1050px] h-[1044px] left-[195px] mx-auto py-[20px]  gap-[80px] ">
  <div className="flex flex-col w-[691px] h-[134px] mx-auto  mt-[90px] mb-[30px] ">
  <div className="w-[114px] h-[24px] text-[14px] mx-auto ">Practice Advice</div>
  <div className="w-[309px] h-[50px] text-[40px] font-bold mx-auto ">Featured Posts</div>
  <div className="w-[469px] h-[40px]  text-[14px]  mx-auto "><p>Problems trying to resolve the conflict between 
  the two major realms of Classical physics: Newtonian mechanics</p> </div>



</div>
<div className="flex w-[1050px] h-[606px]  mx-auto gap-[0px] mt-[90px] mb-[30px]   ">
<div className="w-[348px] h-[606px]  mx-auto ">
  <div className="h-[303px] w-[348px]">
  <Image
      src="/images/1.png"
      alt="Responsive imageee"
      layout="responsive"
      width={238} 
      height={427} 
      className="object-cover"
    />
  </div>
  <div className="flex flex-col space-y-4 mx-auto h-[303px] w-[348px]">
  <div className=" flex w-[159px] h-[16px] text-[12px] gap-[15px] mt-[10px]">
  <ul className=" flex gap-[15px] text-[12px]"><li>Google</li>
  <li>Trending</li>
  <li>New</li></ul></div>

  <div className="font-montserrat text-[#252B42]  items-start w-[247px] h-[60px] text-[20px] font-bold ">
  Loudest à la Madison #1 
  (L'integral)</div>
  <div className="font-montserrat text-[#737373]   w-[280px] h-[60px] text-[14px] font-bold ">
  We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</div>

  <div className="flex w-[299px] h-[46px] justify-between  ">
    <div className="text-[12px] w-[77px] h-[16px] text-[#737373]">22 April 2021</div>

    <div className=" text-[12px] w-[84px] h-[16px] text-[#737373]">10 comments</div>
  </div>
  <div className=" w-[104px] h-[124px] gap-[10px]">
  <div className=" w-[85px] h-[24px] gap-[10px] text-[14px] text-[#737373]">Learn More

  </div>
  


  

</div>
</div>
  </div>


  <div className="w-[348px] h-[606px]  mx-auto flex flex-col">
  <div className="h-[303px] w-[348px]">
  <Image
      src="/images/2.png"
      alt="Responsive imageee"
      layout="responsive"
      width={238} 
      height={427} 
      className="object-cover"
    />
  </div>
  <div className="flex flex-col space-y-4 mx-auto h-[303px] w-[348px]">
  <div className=" flex w-[159px] h-[16px] text-[12px] gap-[15px] mt-[10px]">
  <ul className=" flex gap-[15px] text-[12px]"><li>Google</li>
  <li>Trending</li>
  <li>New</li></ul></div>

  
  <div className="font-montserrat text-[#252B42]  items-start w-[247px] h-[60px] text-[20px] font-bold ">
  Loudest à la Madison #1 
  (L'integral)</div>
  <div className="font-montserrat text-[#737373]   w-[280px] h-[60px] text-[14px] font-bold ">
  We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</div>

  <div className="flex w-[299px] h-[46px] justify-between  ">
    <div className="text-[12px] w-[77px] h-[16px] text-[#737373]">22 April 2021</div>

    <div className=" text-[12px] w-[84px] h-[16px] text-[#737373]">10 comments</div>
  </div>
  <div className=" w-[104px] h-[124px] gap-[10px]">
  <div className=" w-[85px] h-[24px] gap-[10px] text-[14px] text-[#737373]">Learn More

  </div>
  

</div>
  </div>




</div>


<div className="h-[606px] w-[348px]  mx-auto  flex flex-col">
  <div className="h-[303px] w-[348px]">
  <Image
      src="/images/3.png"
      alt="Responsive imageee"
      layout="responsive"
      width={348} 
      height={303} 
      className="object-cover"
    />
  </div>
  <div className="flex flex-col space-y-4 mx-auto h-[306px] w-[348px]">
  <div className=" flex w-[159px] h-[16px] text-[12px] gap-[15px] mt-[10px]">
  <ul className=" flex gap-[15px] text-[12px]"><li>Google</li>
  <li>Trending</li>
  <li>New</li></ul></div>

  
  <div className="font-montserrat text-[#252B42]  items-start w-[247px] h-[60px] text-[20px] font-bold ">
  Loudest à la Madison #1 
  (L'integral)</div>
  <div className="font-montserrat text-[#737373]   w-[280px] h-[60px] text-[14px] font-bold ">
  We focus on ergonomics and meeting 
you where you work. It's only a 
keystroke away.</div>

  <div className="flex w-[299px] h-[46px] justify-between  ">
    <div className="text-[12px] w-[77px] h-[16px] text-[#737373]">22 April 2021</div>

    <div className=" text-[12px] w-[84px] h-[16px] text-[#737373]">10 comments</div>
  </div>
  <div className=" w-[104px] h-[124px] gap-[10px]">
  <div className=" w-[85px] h-[24px] gap-[10px] text-[14px] text-[#737373]">Learn More

  </div>
  


</div>
  </div>




</div>







</div>

</div>

  </div>

    
  </div>
  )
}
