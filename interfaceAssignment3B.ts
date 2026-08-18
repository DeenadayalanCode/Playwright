interface DatabaseConnection {
  connect(): void;
  disconnect(): void;
  executeUpdate(query: string): number;
}

// This abstract class defines the required database operations but leaves
// their implementations to a concrete subclass.
abstract class MySqlConnection implements DatabaseConnection {
  protected isConnected: boolean = false;

  abstract connect(): void;
  abstract disconnect(): void;
  abstract executeUpdate(query: string): number;
  abstract executeQuery(query: string): string[];

  protected checkConnection(): boolean {
    if (!this.isConnected) {
      console.log("Operation failed: connect to the database first.");
      return false;
    }

    return true;
  }
}

// Concrete class providing implementations for all abstract methods.
class PlaywrightConnection extends MySqlConnection {
  connect(): void {
    this.isConnected = true;
    console.log("Connected to the MySQL database.");
  }

  disconnect(): void {
    this.isConnected = false;
    console.log("Disconnected from the MySQL database.");
  }

  executeUpdate(query: string): number {
    if (!this.checkConnection()) {
      return 0;
    }

    console.log(`Executing update: ${query}`);
    return 1;
  }

  executeQuery(query: string): string[] {
    if (!this.checkConnection()) {
      return [];
    }

    console.log(`Executing query: ${query}`);
    return ["User 101: Dheena", "User 102: Alex"];
  }
}

function demonstrateAbstraction(): void {
  // An abstract-class reference holds an instance of the concrete subclass.
  const connection: MySqlConnection = new PlaywrightConnection();

  connection.connect();
  connection.executeUpdate(
    "UPDATE users SET status = 'active' WHERE id = 101",
  );

  const results = connection.executeQuery("SELECT * FROM users");
  console.log("Query results:", results);

  connection.disconnect();
}
demonstrateAbstraction();
