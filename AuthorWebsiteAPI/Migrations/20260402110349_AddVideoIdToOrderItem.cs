using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AuthorWebsiteAPI.Migrations
{
    /// <inheritdoc />
    public partial class AddVideoIdToOrderItem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "BookId",
                table: "OrderItems",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "VideoId",
                table: "OrderItems",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_VideoId",
                table: "OrderItems",
                column: "VideoId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_Videos_VideoId",
                table: "OrderItems",
                column: "VideoId",
                principalTable: "Videos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_Videos_VideoId",
                table: "OrderItems");

            migrationBuilder.DropIndex(
                name: "IX_OrderItems_VideoId",
                table: "OrderItems");

            migrationBuilder.DropColumn(
                name: "VideoId",
                table: "OrderItems");

            migrationBuilder.AlterColumn<int>(
                name: "BookId",
                table: "OrderItems",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
