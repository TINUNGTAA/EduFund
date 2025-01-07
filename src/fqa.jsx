import Accordion from "./accordion";
function FQA() {
  return (
    <section className=" my-10 py-12 ">
      <h1 className="text-center font-semibold text-4xl text-gray-700 mb-20">
        Frequently Asked Questions
      </h1>

      <div>
        <Accordion
          question={"Do I have to make any payment during application?"}
          answer={
            "EduFund is 100% free. You do not need to pay any amount to register on the platform. Also, EduFund is free to to download. We do not take any percentage from the money donated to you. "
          }
        />
        <Accordion
          question={"Who can apply?"}
          answer={
            "Students who has genuine reasons that inhibits from furthering thier education. EduFund should be your last resort. If family or friends can support, kindly do not apply. For now, we focus more on supporting Primary, Secondary, and Tertiary students "
          }
        />
        <Accordion
          question={"Where is EduFund available?"}
          answer={
            "EduFund is currently avaiable in Ghana for now. But, anyone across the globe can sponsor any student seeking funding on EduFund. We are looking forward to expanding to other countries as well. "
          }
        />
      </div>
    </section>
  );
}
export default FQA;
