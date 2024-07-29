import Header from "@/components/Header";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return ( 
   <>
      <div style={{marginBottom: "5rem"}}>
         <Header />
      </div>
      <div>
         {children}
      </div>
   </>
   );
}

export default layout
