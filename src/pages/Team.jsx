import React from "react";

const Team = () => {
  return (
    <div className="team_linear_bg min-h-screen py-12">
      <div className="space-y-6 max-w-7xl w-full mx-auto">
        <h1 className="text-[#1E974D] text-3xl font-bold text-center uppercase">
          PATRONS
        </h1>
        <div className="flex flex-wrap gap-6 justify-evenly ">
          <TeamCard
            image={"Dr._ANEEL_KASHI_MURARKA"}
            name={"Dr. ANEEL KASHI MURARKA"}
            post={"A True Karmyogi, Humanist and Philanthropist"}
          />
          <TeamCard
            image={"Mr. B. D. AGARWAL"}
            name={"Mr. B. D. AGARWAL"}
            post={"A Visionary, Entrepreneur Philanthropist and Social Worker"}
          />
          <TeamCard
            image={"Dr. PAWAN KANSAL"}
            name={"Dr. PAWAN KANSAL"}
            post={
              "Renowned Entrepreneur, <br />Dedicated Social Worker and Devotee of Krishn"
            }
          />
          <TeamCard
            image={"B. K. Soni"}
            name={"B. K. Soni"}
            post={"CMD, Eco Recycling Ltd."}
          />
          <TeamCard
            image={"Navratan Aggarwal"}
            name={"Navratan Aggarwal"}
            post={
              "Director Bikanerwala Foods Pvt. Ltd. Spritual Seeker, Social Worker and Philanthropist"
            }
          />
        </div>
        {/* Dotted line seperator */}
        <div className="border-b-2 border-[#E50019] border-dotted" />
        {/* Editorial Team */}
        <h1 className="text-[#1E974D] text-3xl font-bold text-center uppercase">
          EDITORIAL TEAM
        </h1>
        <div className="flex flex-wrap gap-6 justify-center pb-8">
          <TeamCard
            image={"CHANDRAKANT VIDYARTHI"}
            name={"CHANDRAKANT VIDYARTHI"}
            post={"Managing Editor"}
          />
        </div>
        {/* TWO TEAM TOGETHER */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-6">
            <h1 className="text-[#1E974D] text-3xl font-bold text-center uppercase">
              HINDI EDITORIAL TEAM
            </h1>
            <div className="flex flex-wrap gap-6 justify-evenly ">
              <TeamCard
                image={`ACHARYA SANJIV VERMA 'SALIL'`}
                name={`ACHARYA SANJIV VERMA 'SALIL'`}
                post={"Editor - Hindi Language Content and Poetry"}
              />
              <TeamCard
                image={"PANDIT BHAVANATH JHA"}
                name={"PANDIT BHAVANATH JHA"}
                post={"Editor - Sanskrit Language Content"}
              />
              <TeamCard
                image={"NARMADA PRASAD UPADHYAY"}
                name={"NARMADA PRASAD UPADHYAY"}
                post={"Editor - Specialist of Indian Art & Miniature Paintings"}
              />
              <TeamCard
                image={"VIVEK AGRAWAL"}
                name={"VIVEK AGRAWAL"}
                post={"Editor - Operations"}
              />
              <TeamCard
                image={"Dr. RAVINDER KUMAR GUPTA"}
                name={"Dr. RAVINDER KUMAR GUPTA"}
                post={"Editor - Indian Philosophy and Language"}
              />
            </div>
          </div>
          {/* Vertical Dotted Line */}
          <div className="border-l-2 border-[#E50019] border-dotted" />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <h1 className="text-[#1E974D] text-3xl font-bold text-center uppercase">
                ENGLISH EDITORIAL TEAM
              </h1>
              <div className="flex flex-wrap gap-6 justify-evenly ">
                <TeamCard
                  image={"Dr. AVINASH KAPOOR"}
                  name={"Dr. AVINASH KAPOOR"}
                  post={"Editor - Spirituality and Science"}
                />
                <TeamCard
                  image={"Prof. ANIL JAIN"}
                  name={"Prof. ANIL JAIN"}
                  post={"Editor - Prose and Poetry"}
                />
                <TeamCard
                  image={"GURSHEEL WALIA"}
                  name={"GURSHEEL WALIA"}
                  post={
                    "Editor - Indian Philosophy and Contemporary literature"
                  }
                />
                <TeamCard
                  image={"VEENU JINDAL"}
                  name={"VEENU JINDAL"}
                  post={"VEENU JINDAL"}
                />
                <TeamCard
                  image={"Dr. Charan Singh Kedarkhandi"}
                  name={"Dr. Charan Singh Kedarkhandi"}
                  post={
                    "Editor - Indian Philosophy and Contemporary Spiritual Literature"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {/* Dotted Line */}
        <div className="border-b-2 border-[#E50019] border-dotted" />
        {/* Design Technical & Commercoal Departments */}
        <h1 className="text-[#1E974D] text-3xl font-bold text-center uppercase">
          DESIGN, TECHNICAL & COMMERCIAL DEPARTMENTS
        </h1>
        <div className="flex max-w-6xl mx-auto flex-wrap gap-6 justify-evenly ">
          <TeamCard
            image={"JAIN KAMAL"}
            name={"JAIN KAMAL"}
            post={"Design Editor, Typographer <br />and Publication Expert"}
          />
          <TeamCard
            image={"VISHWATOSH DAS"}
            name={"VISHWATOSH DAS"}
            post={"Consultant - Art and Advertisement"}
          />
          <TeamCard
            image={"HEMANT CHAVAN"}
            name={"HEMANT CHAVAN"}
            post={"(Pratima Advertising) <br />Editor - Printing and Design"}
          />
          <TeamCard
            image={"VIPUL KUSHEWAHA"}
            name={"VIPUL KUSHEWAHA"}
            post={"Technical Head - Digital"}
          />
          <TeamCard
            image={"SAOUMYAVANDIT KUSHWAHA"}
            name={"SAOUMYAVANDIT KUSHWAHA"}
            post={"Media Director - Digital"}
          />
          <TeamCard
            image={"ASHA SETHHI"}
            name={"ASHA SETHHI"}
            post={"Consultant - Office and Accounts"}
          />
          <TeamCard
            image={"VRUSHABH JADHAV"}
            name={"VRUSHABH JADHAV"}
            post={"UX/UI Designer"}
          />
          <TeamCard
            image={"GAURAV KONDE"}
            name={"GAURAV KONDE"}
            post={"Developer"}
          />
        </div>
        {/* Dotted Line */}
        <div className="border-b-2 border-[#E50019] border-dotted" />
        {/* Consultants Team */}
        <h1 className="text-[#1E974D] text-3xl font-bold text-center uppercase">
          CONSULTANTS AND MENTORS
        </h1>
        <div className="flex flex-wrap gap-6 justify-evenly ">
          <TeamCard
            image={"Dr. ASHUTOSH ANGIRAS"}
            name={"Dr. ASHUTOSH ANGIRAS"}
            post={"Consultant - Sanskrit and Spiritual Literature"}
          />
          <TeamCard
            image={"Dr. ANAND SINGH"}
            name={"Dr. ANAND SINGH"}
            post={"Consultant - Indian Culture and Hindi Literature"}
          />
          <TeamCard
            image={"SHAILENDRA KRISHNA BHATT"}
            name={"SHAILENDRA KRISHNA BHATT"}
            post={"Conservator of Traditional and Tribal Art, Philanthropist"}
          />
          <TeamCard
            image={"Mrs. SHOBHA SADANI"}
            name={"Mrs. SHOBHA SADANI"}
            post={"Coordinator of Art and Cultural Department"}
          />
          <TeamCard
            image={"ARJUN SINGH RATHORE"}
            name={"ARJUN SINGH RATHORE"}
            post={"A Humanist, Social Worker and Devotee of Krishna"}
          />
          <TeamCard
            image={"PANKAJ NARAYAN"}
            name={"PANKAJ NARAYAN"}
            post={"Consultant - Indian Culture and Media"}
          />
          <TeamCard
            image={"ASHOK V. JADHAV"}
            name={"ASHOK V. JADHAV"}
            post={"Consultant Art and Design"}
          />
          <TeamCard
            image={"SAGAR KADAM"}
            name={"SAGAR KADAM"}
            post={"Legal Advisor"}
          />
          <TeamCard
            image={"ADVOCATE RAHUL CHIPLUNKAR"}
            name={"ADVOCATE RAHUL CHIPLUNKAR"}
            post={"Legal Advisor"}
          />
        </div>
      </div>
    </div>
  );
};

const TeamCard = ({ image, name, post }) => {
  return (
    <div className="max-w-[220px] space-y-1">
      <img draggable={false} src={`/assets/team/${image}.png`} alt="" />
      <div className="min-h-[80px]">
        <div className="text-[#154A6D] text-base text-center font-bold pt-2">
          {name}
        </div>
        <div
          className="text-sm text-center text-[#00000080]"
          dangerouslySetInnerHTML={{ __html: post }}
        ></div>
      </div>
    </div>
  );
};

export default Team;
