import Image from "next/image";

function CustomerFeedback() {
  const feedbacks = [
    {
      name: "Emma White",
      avatar: "/Images/Taylor2.jpg",
      feedback:
        "My kids love the stories! It’s so creative and helps them learn new things while having fun.",
      relation: "Parent of 2 kids",
    },
    {
      name: "James Miller",
      avatar: "/Images/Jung.jpg",
      feedback:
        "This app is a lifesaver! It keeps my nephew entertained, and the stories are imaginative and unique.",
      relation: "Uncle",
    },
    {
      name: "Jayson Tutom",
      avatar: "/Images/rhaz.jpg",
      feedback:
        "As a teacher, I love how this app encourages storytelling and creativity among kids.",
      relation: "Elementary School Teacher",
    },
    {
      name: "Liam Brown",
      avatar: "/Images/Rock.jpg",
      feedback:
        "The stories are amazing! My daughter insists on listening to a new one every night.",
      relation: "Father of a 6-year-old",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-20 h-screen">
      <h2 className="text-4xl font-bold text-primary text-center mb-4 -mt-6">
        What People Love About Us
      </h2>
      <p className="text-xl text-black text-center">
        Discover heartfelt testimonials from parents, carers or educators
      </p>
      <p className="text-xl text-black text-center mb-12">
        who have experienced the magic of reading with Talescapes personalised storytelling
      </p>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {feedbacks.map(({ name, avatar, feedback, relation }, index) => (
          <div
            key={index}
            className="bg-fourth rounded-lg shadow-lg p-6 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-4 border-primary overflow-hidden">
                <Image
                  src={avatar}
                  alt={name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">{name}</h3>
                <p className="text-sm text-black italic">{relation}</p>
              </div>
            </div>
            <p className="text-black text-lg font-light text-center">{feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerFeedback;
