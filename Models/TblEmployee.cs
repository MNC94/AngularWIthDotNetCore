using System;
using System.Collections.Generic;

namespace AngularWIthDotNetCore.Models;

public partial class TblEmployee
{
    public int EmployeeId { get; set; }

    public string Name { get; set; } = null!;

    public string City { get; set; } = null!;

    public string Department { get; set; } = null!;

    public string Gender { get; set; } = null!;
}
