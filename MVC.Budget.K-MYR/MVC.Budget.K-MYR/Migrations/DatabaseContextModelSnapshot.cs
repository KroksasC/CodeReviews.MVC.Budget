﻿// <auto-generated />
using System;
using MVC.Budget.K_MYR.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace MVC.Budget.K_MYR.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("MVC.Budget.K_MYR.Models.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<decimal>("Budget")
                        .HasPrecision(19, 4)
                        .HasColumnType("decimal(19,4)");

                    b.Property<int>("GroupId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("GroupId");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("MVC.Budget.K_MYR.Models.Group", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.HasKey("Id");

                    b.ToTable("Groups");
                });

            modelBuilder.Entity("MVC.Budget.K_MYR.Models.Transaction", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<decimal>("Amount")
                        .HasPrecision(19, 4)
                        .HasColumnType("decimal(19,4)");

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<DateTime>("DateTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Evaluated")
                        .HasColumnType("bit");

                    b.Property<bool>("EvaluatedIsHappy")
                        .HasColumnType("bit");

                    b.Property<bool>("EvaluatedIsNecessary")
                        .HasColumnType("bit");

                    b.Property<bool>("IsHappy")
                        .HasColumnType("bit");

                    b.Property<bool>("IsNecessary")
                        .HasColumnType("bit");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Transactions");
                });

            modelBuilder.Entity("MVC.Budget.K_MYR.Models.Category", b =>
                {
                    b.HasOne("MVC.Budget.K_MYR.Models.Group", "Group")
                        .WithMany("Categories")
                        .HasForeignKey("GroupId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Group");
                });

            modelBuilder.Entity("MVC.Budget.K_MYR.Models.Transaction", b =>
                {
                    b.HasOne("MVC.Budget.K_MYR.Models.Category", "Category")
                        .WithMany("Transactions")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");
                });

            modelBuilder.Entity("MVC.Budget.K_MYR.Models.Category", b =>
                {
                    b.Navigation("Transactions");
                });

            modelBuilder.Entity("MVC.Budget.K_MYR.Models.Group", b =>
                {
                    b.Navigation("Categories");
                });
#pragma warning restore 612, 618
        }
    }
}
