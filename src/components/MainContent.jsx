import Card from "./Card";

function MainContent() {
  return (
    <main className="cars-main-content">
      <Card
        title="Police Car London"
        yearoffab={1980}
        maxspeed={70}
        price={499}
        imageUrl="https://clipart-library.com/images_k/police-car-transparent-background/police-car-transparent-background-22.png"
      />
      <Card
        title="Police Car Orlando"
        yearoffab={1990}
        maxspeed={80}
        price={699}
        imageUrl="https://pngimg.com/d/police_car_PNG20.png"
      />
      <Card
        title="Police Car Miami"
        yearoffab={2000}
        maxspeed={100}
        price={899}
        imageUrl="https://i.pinimg.com/originals/24/4f/99/244f9932e6bc4e7006d7c592a2abff57.png"
      />
      <Card
        title="Police Car Detroit"
        yearoffab={2010}
        maxspeed={130}
        price={1299}
        imageUrl="https://static.vecteezy.com/system/resources/previews/025/276/270/original/side-view-police-car-png.png"
      />
      <Card
        title="Police Car Dallas"
        yearoffab={2020}
        maxspeed={180}
        price={1599}
        imageUrl="https://png.pngtree.com/png-clipart/20220213/original/pngtree-cartoon-police-car-vector-art-png-image_7268050.png"
      />
      <Card
        title="Police Car Arizona"
        yearoffab={2030}
        maxspeed={280}
        price={2599}
        imageUrl="https://purepng.com/public/uploads/large/purepng.com-alfa-romeo-police-carcarvehicletransportalfa-romeopolice-car-961524662939hrwsz.png"
      />
      <Card
        title="Police Car Boston"
        yearoffab={2040}
        maxspeed={380}
        price={4299}
        imageUrl="https://www.nwmc-cog.org/getattachment/d31248c2-fde7-45cf-97c8-894365852007/attachment.aspx"
      />
      <Card
        title="Police Car Atlanta"
        yearoffab={2050}
        maxspeed={500}
        price={8990}
        imageUrl="https://www.pngitem.com/pimgs/b/28-288320_police-car-dodge-charger-police-car-no-background.png"
      />
    </main>
  );
}

export default MainContent;
