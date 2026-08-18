interface DatabaseConnection {
  connect(): void;
  disconnect(): void;
  executeUpdate(query: string): number;
}

// Concrete class that fulfills the DatabaseConnection contract.
class PlaywrightConnection implements DatabaseConnection {
  private isConnected: boolean = false;

  connect(): void {
    this.isConnected = true;
    console.log("Connected to the database using PlaywrightConnection.");
  }

  disconnect(): void {
    this.isConnected = false;
    console.log("Disconnected from the database.");
  }

  executeUpdate(query: string): number {
    if (!this.isConnected) {
      console.log("Update failed: connect to the database first.");
      return 0;
    }

    console.log(`Executing update: ${query}`);
    const affectedRows = 1;
    console.log(`Affected rows: ${affectedRows}`);
    return affectedRows;
  }
}

function demonstrateInterface(): void {
  // The interface type can refer to any conforming concrete object.
  const connection: DatabaseConnection = new PlaywrightConnection();

  connection.connect();
  connection.executeUpdate(
    "UPDATE users SET status = 'active' WHERE id = 101",
  );
  connection.disconnect();
}
demonstrateInterface();