async function handleLogout() {
    try {
      
      await fetch("/logout", {
        method: "POST",
        credentials: "include"
      });

      localStorage.clear();
      sessionStorage.clear();

     
      window.location.replace("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  window.addEventListener("pageshow", function (event) {
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
      window.location.reload();
    }
  });