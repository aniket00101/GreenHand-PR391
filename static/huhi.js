async function handleLogout() {
    try {
      // Call server logout route to end session
      await fetch("/logout", {
        method: "POST",
        credentials: "include"
      });

      // Clear client-side data
      localStorage.clear();
      sessionStorage.clear();

      // Redirect to login
      window.location.replace("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  // Optional: Prevent going back after logout
  window.addEventListener("pageshow", function (event) {
    if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
      window.location.reload();
    }
  });