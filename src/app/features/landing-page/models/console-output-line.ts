export interface ConsoleOutputLine {
  content: string,
}

export const consoleLogo: string = `  ____                 _     _   ____  _                 _                  _      _    _
 |  _ \\  __ ___      _(_) __| | / ___|| |_ __ ___      _(_)___ _____   _ _ /_/ ___| | _(_)
 | | | |/ _\` \\ \\ /\\ / / |/ _\` | \\___ \\| __/ _\` \\ \\ /\\ / / / __|_  / | | | '_ \\/ __| |/ / |
 | |_| | (_| |\\ V  V /| | (_| |  ___) | || (_| |\\ V  V /| \\__ \\/ /| |_| | | | \\__ \\   <| |
 |____/ \\__,_| \\_/\\_/ |_|\\__,_| |____/ \\__\\__,_| \\_/\\_/ |_|___/___|\\__, |_| |_|___/_|\\_\\_|
                                                                   |___/
==========================================================================================
::Dawid Stawiszyński::                                                           (xalpol12)`;

export const outputLines: ConsoleOutputLine[] = [
  {
    content: `  INFO 1 --- [main] c.x.m.PersonalWebsiteApplication         : Starting PersonalWebsiteApplication v0.0.1-SNAPSHOT using Java 17.0.9 with PID 1 (/app/BOOT-INF/classes started by root in /app)`
  },
  {
    content: ` DEBUG 1 --- [main] c.x.m.PersonalWebsiteApplication         : Running with Spring Boot v3.2.0, Spring v6.1.1`
  },
  {
    content: `  INFO 1 --- [main] c.x.m.PersonalWebsiteApplication         : The following 1 profile is active: "docker"`
  },
  {
    content: `  INFO 1 --- [main] .s.d.r.c.RepositoryConfigurationDelegate  : Bootstrapping Spring Data JPA repositories in DEFAULT mode.`
  },
  {
    content: `  INFO 1 --- [main] .s.d.r.c.RepositoryConfigurationDelegate  : Finished Spring Data repository scanning in 185 ms. Found 2 JPA repository interfaces.`
  },
  {
    content: `  INFO 1 --- [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 80 (http)`
  },
  {
    content: `  INFO 1 --- [main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]`
  },
  {
    content: `  INFO 1 --- [main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.16]`
  },
  {
    content: `  INFO 1 --- [main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext`
  },
  {
    content: `  INFO 1 --- [main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 4819 ms`
  },
  {
    content: `  INFO 1 --- [main] o.hibernate.jpa.internal.util.LogHelper  : HHH000204: Processing PersistenceUnitInfo [name: default]`
  },
  {
    content: `  INFO 1 --- [main] org.hibernate.Version                    : HHH000412: Hibernate ORM core version 6.3.1.Final`
  },
  {
    content: `  INFO 1 --- [main] o.h.c.internal.RegionFactoryInitiator    : HHH000026: Second-level cache disabled`
  },
  {
    content: `  INFO 1 --- [main] o.s.o.j.p.SpringPersistenceUnitInfo      : No LoadTimeWeaver setup: ignoring JPA class transformer`
  },
  {
    content: `  INFO 1 --- [main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Starting...`
  },
  {
    content: `  INFO 1 --- [main] com.zaxxer.hikari.pool.HikariPool        : HikariPool-1 - Added connection org.postgresql.jdbc.PgConnection@79295932`
  },
  {
    content: `  INFO 1 --- [main] com.zaxxer.hikari.HikariDataSource       : HikariPool-1 - Start completed.`
  },
  {
    content: `  INFO 1 --- [main] o.h.e.t.j.p.i.JtaPlatformInitiator       : HHH000489: No JTA platform available (set 'hibernate.transaction.jta.platform' to enable JTA platform integration)`
  },
  {
    content: `  INFO 1 --- [main] j.LocalContainerEntityManagerFactoryBean : Initialized JPA EntityManagerFactory for persistence unit 'default'`
  },
  {
    content: `  WARN 1 --- [main] JpaBaseConfiguration$JpaWebConfiguration   : spring.jpa.open-in-view is enabled by default. Therefore, database queries may be performed during view rendering. Explicitly configure spring.jpa.open-in-view to disable this warning`
  },
  {
    content: `  INFO 1 --- [main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 80 (http) with context path ''`
  },
  {
    content: `  INFO 1 --- [main] c.x.m.PersonalWebsiteApplication         : Started PersonalWebsiteApplication in 16.774 seconds (process running for 17.729)`
  },
]
