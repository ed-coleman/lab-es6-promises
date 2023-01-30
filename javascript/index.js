// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
getInstruction(
  "mashedPotatoes",
  0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction(
      "mashedPotatoes",
      1,
      (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          "mashedPotatoes",
          2,
          (step3) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              "mashedPotatoes",
              3,
              (step4) => {
                document.querySelector(
                  "#mashedPotatoes"
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step5) => {
                    document.querySelector(
                      "#mashedPotatoes"
                    ).innerHTML += `<li>${step5}</li>`;
                    getInstruction(
                      "mashedPotatoes",
                      5,
                      (step6) => {
                        document.querySelector(
                          "#mashedPotatoes"
                        ).innerHTML += `<li>${step6}</li>`;
                      },
                      (document.querySelector(
                        "#mashedPotatoesImg"
                      ).style.display = "block"),
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Iteration 1 - using callbacks
// ...

// Iteration 2 - using promises
// ...

obtainInstruction("steak", 0).then((step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  obtainInstruction("steak", 1).then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    obtainInstruction("steak", 2).then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      obtainInstruction("steak", 3).then((step3) => {
        document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
        obtainInstruction("steak", 4).then((step4) => {
          document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
          obtainInstruction("steak", 5).then((step5) => {
            document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
            obtainInstruction("steak", 6).then((step6) => {
              document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
              obtainInstruction("steak", 7).then(() => {
                document.querySelector(
                  "#steak"
                ).innerHTML += `<li>Steak is Ready!</li>`;
                document.querySelector("#steakImg").style.display = "block";
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 3 using async/await

async function makeBroccoli() {
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${await obtainInstruction("broccoli", 0)}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${await obtainInstruction("broccoli", 1)}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${await obtainInstruction("broccoli", 2)}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${await obtainInstruction("broccoli", 3)}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${await obtainInstruction("broccoli", 4)}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${await obtainInstruction("broccoli", 5)}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>${await obtainInstruction("broccoli", 6)}</li>`;
  document.querySelector(
    "#broccoli"
  ).innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").style.display = "block";
}

makeBroccoli();

// Bonus 2 - Promise all

promise1 = obtainInstruction("brusselsSprouts", 0);
promise2 = obtainInstruction("brusselsSprouts", 1);
promise3 = obtainInstruction("brusselsSprouts", 2);
promise4 = obtainInstruction("brusselsSprouts", 3);
promise5 = obtainInstruction("brusselsSprouts", 4);
promise6 = obtainInstruction("brusselsSprouts", 5);
promise7 = obtainInstruction("brusselsSprouts", 6);
promise8 = obtainInstruction("brusselsSprouts", 7);

const allPromises = [promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8]

Promise.all(allPromises).then ((step) => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[0]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[1]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[2]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[3]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[4]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[5]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[6]}</li>`
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${step[7]}</li>`
  document.querySelector("#brusselsSproutsImg").style.display = "block"
})
