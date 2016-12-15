#!/usr/bin/perl 

#    More, Ashwini    Account: jadrn031
#                     CS545, Fall 2016
#                     Project #4
            
use DBI;
use CGI;

@arr = db_query_array($query);

sub get_db_handle {
my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn031";
my $username = "jadrn031";
my $password = "samovar";
my $database_source = "dbi:mysql:$database:$host:$port";
my $response = "";

my $dbh = DBI->connect($database_source, $username, $password)
or die 'Cannot connect to db';
return $dbh;
}

sub db_query_array {
    my @arr;
    my $sql = shift @_; 
    my $dbh = get_db_handle();         
    my $sth = $dbh->prepare("SELECT tr.sku, tr.qty, tr.date, tr.qty*pr.retail, (pr.retail-pr.cost)*tr.qty FROM products pr, transaction tr where tr.sku = concat(pr.sku, \" \",pr.title) order by tr.date");
    $sth->execute();
    while(my @row=$sth->fetchrow_array()) {   
        push(@arr, \@row);
    }    
    return @arr;    
}   	
 
print "Content-type:  text/html\n\n";

print "<!DOCTYPE html>";
print "<html lang=\"en\">";
print "<head>";
print "<title>Bertha's Deluxe Chocolates - Report</title>";
print "<link rel=\"stylesheet\" href=\"/home/jadrn031/public_html/proj4/report_style.css\">\n";
print "<style>#rep_table table {margin:auto;width:900px;align:center;font-size:20px;}    
	h1{text-align:center;}
    #rep_table th, td {background-color:#E9C2A6;padding: 5px 20px 5px 20px;}
    #bot{margin-top:80px;font-size:24px;font-weight:bold;text-align:center;}</style>";
print "</head>";
print "<body>";
print "<h1>Bertha's Deluxe Chocolates - Report</h1>";
print "<table id=\"rep_table\" align=\"center\"><tr><th>Product</th><th>Quantity</th><th>Date</th><th>Sales</th><th>Profit</th></tr>";
my $gross_sales = 0;
my $gross_profit = 0;
for(my $i=0; $i < @arr; $i++)
{
$gross_sales += $arr[$i][3];
$gross_profit += $arr[$i][4];
print "<tr><td>$arr[$i][0]</td><td>$arr[$i][1]</td><td>$arr[$i][2]</td><td>$arr[$i][3]</td><td>$arr[$i][4]</td></tr>";
}
print "</table>";
print "<div id=\"bot\"><font color=\"red\">Gross Sales: $gross_sales<br>";
print "Gross Profit: $gross_profit</font></div>";
print "</body>";
print "</html>";